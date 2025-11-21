// pages/api/available-slots.js
import connectDB from "../../lib/db.js";
import Appointment from "@/lib/model";
import { getAvailableTimeSlots } from "@/lib/appointmentConfig";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const { date } = req.query;

      if (!date) {
        return res.status(400).json({ error: "Date parameter is required" });
      }

      // Get the selected date
      const selectedDate = new Date(date);
      selectedDate.setHours(0, 0, 0, 0);

      // Get all appointments for that date
      const startOfDay = new Date(selectedDate);
      const endOfDay = new Date(selectedDate);
      endOfDay.setHours(23, 59, 59, 999);

      const appointments = await Appointment.find({
        date: {
          $gte: startOfDay,
          $lte: endOfDay,
        },
        status: { $in: ["pending", "confirmed"] },
      });

      // Get available time slots
      const availableSlots = await getAvailableTimeSlots(
        selectedDate,
        appointments
      );

      res.status(200).json({
        availableSlots,
        businessHours: {
          start: 9,
          end: 17,
        },
      });
    } catch (error) {
      console.error("Error fetching available slots:", error);
      res.status(500).json({ error: "Failed to fetch available time slots" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
