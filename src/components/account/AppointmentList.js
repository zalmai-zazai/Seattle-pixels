// components/AppointmentList.js

import { useEffect, useState } from "react";
import { format } from "date-fns"; // Library to format dates
import axios from "axios";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/api/appointment");

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }

      const data = await response.json();
      setAppointments(data.appointments);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const deletedAppointment = async (id) => {
    try {
      const response = await axios.delete("/api/appointment", {
        data: { id },
      });
      if (response.data.success) {
        console.log(response.data.message);

        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment._id !== id)
        );
        setResponseMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setResponseMessage(response.data.message);
      // console.log(response.data.data.message);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="appointment-list">
      <ul className="mt-4">
        {appointments.map((appointment) => (
          <li key={appointment._id} className="p-4 border-b">
            <h3 className="font-semibold text-xl">{appointment.name}</h3>
            <p>Email: {appointment.email}</p>
            <p>Phone: {appointment.phone}</p>
            <p>Message: {appointment.message}</p>
            <p>Appointment Date: {format(new Date(appointment.date), "Pp")}</p>
            <p>Created at: {format(new Date(appointment.createdAt), "Pp")}</p>
            <button
              onClick={() => deletedAppointment(appointment._id)}
              className="btn btn-primary m-2 "
            >
              Appointment Done
            </button>
            <p>{responseMessage && responseMessage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
