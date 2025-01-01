// components/AppointmentList.js

import { useEffect, useState } from "react";
import { format } from "date-fns"; // Library to format dates

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
