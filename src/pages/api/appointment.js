// pages/api/appointment.js
import connectDB from "../../lib/db.js";
import Appointment from "@/lib/model";
import { sendEmail, emailTemplates } from "@/lib/emailService";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const { status } = req.query;
      let filter = {};

      if (status && status !== "all") {
        filter.status = status;
      }

      const appointments = await Appointment.find(filter).sort({ date: 1 });
      res.status(200).json({ appointments });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  } else if (req.method === "POST") {
    const { name, email, phone, message, date } = req.body;

    try {
      // SIMPLE CHECK: Only check if the time is in the future
      const appointmentDate = new Date(date);
      const now = new Date();

      if (appointmentDate < now) {
        return res.status(400).json({
          message: "Please select a future date and time.",
        });
      }

      // SIMPLE CHECK: Check if appointment time is already booked
      const existingAppointment = await Appointment.findOne({
        date: new Date(date),
        status: { $in: ["pending", "confirmed"] },
      });

      if (existingAppointment) {
        return res.status(400).json({
          message:
            "This time slot is already booked. Please choose a different time.",
        });
      }

      // Create a new appointment (status: pending - NO EMAIL SENT)
      const newAppointment = new Appointment({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone.trim(),
        message: message.trim(),
        date: new Date(date),
        status: "pending",
      });

      await newAppointment.save();

      // NO EMAIL SENT HERE - Wait for admin confirmation
      console.log("📝 Appointment created (pending):", newAppointment.email);

      return res.status(201).json({
        message:
          "Appointment request submitted successfully! We'll confirm via email shortly.",
        appointmentId: newAppointment.appointmentId,
      });
    } catch (error) {
      console.error("Appointment creation error:", error);
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  } else if (req.method === "PUT") {
    // Update appointment status (complete, cancel, etc.)
    const { id, status, cancellationReason } = req.body;

    if (!id || !status) {
      return res.status(400).json({
        success: false,
        message: "ID and status are required!",
      });
    }

    try {
      const validStatuses = ["pending", "confirmed", "completed", "cancelled"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Invalid status",
        });
      }

      const updatedAppointment = await Appointment.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

      if (!updatedAppointment) {
        return res.status(404).json({
          success: false,
          message: "Appointment not found!",
        });
      }

      // Send emails ONLY when status changes to confirmed or cancelled
      try {
        if (status === "confirmed") {
          await sendEmail(
            updatedAppointment.email,
            emailTemplates.confirmation,
            updatedAppointment
          );
          console.log(
            "✅ Confirmation email sent to:",
            updatedAppointment.email
          );
        } else if (status === "cancelled") {
          await sendEmail(
            updatedAppointment.email,
            emailTemplates.cancellation,
            {
              ...updatedAppointment.toObject(),
              reason: cancellationReason || "No reason provided",
            }
          );
          console.log(
            "✅ Cancellation email sent to:",
            updatedAppointment.email
          );
        }
      } catch (emailError) {
        console.error("❌ Email sending failed:", emailError);
        // Don't fail the whole request if email fails
      }

      res.json({
        success: true,
        message: `Appointment marked as ${status}`,
        appointment: updatedAppointment,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
      });
    }
  } else if (req.method === "DELETE") {
    // Only allow deletion for pending appointments, otherwise archive
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID is required!",
      });
    }

    try {
      const appointment = await Appointment.findById(id);

      if (!appointment) {
        return res.status(404).json({
          success: false,
          message: "Appointment not found!",
        });
      }

      // Instead of deleting, mark as cancelled
      appointment.status = "cancelled";
      await appointment.save();

      // Send cancellation email
      try {
        await sendEmail(appointment.email, emailTemplates.cancellation, {
          ...appointment.toObject(),
          reason: "Appointment cancelled by admin",
        });
        console.log("✅ Cancellation email sent to:", appointment.email);
      } catch (emailError) {
        console.error("❌ Cancellation email failed:", emailError);
      }

      res.json({
        success: true,
        message: "Appointment cancelled successfully!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
      });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
