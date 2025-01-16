// pages/api/appointment.js

import connectDB from "../../lib/db.js";
import Appointment from "@/lib/model";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const appointments = await Appointment.find({});
      res.status(200).json({ appointments });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  } else if (req.method === "POST") {
    // Connect to the database

    // Extract form data from the request
    const { name, email, phone, message, date } = req.body;

    // Create a new appointment
    const newAppointment = new Appointment({
      name,
      email,
      phone,
      message,
      date,
    });

    try {
      // Save appointment in MongoDB
      await newAppointment.save();

      return res
        .status(201)
        .json({ message: "Appointment created successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
    }

    //// Delete the appointment
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    if (!id) {
      res.json({ success: false, message: "ID is required to delete!" });
    }
    try {
      const deletedAppointment = await Appointment.findByIdAndDelete(id);
      if (!deletedAppointment) {
        res.json({ success: false, message: "Appointment Not Found!" });
      }
      res.json({ success: true, message: "Appointment Done!" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Somthing went Wrong!" });
    }
  } else {
    // If not POST request, return 405 Method Not Allowed
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
