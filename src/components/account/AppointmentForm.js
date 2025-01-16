// src/components/AppointmentForm.js
import { useState } from "react";
import { addAppointment } from "@/lib/action"; // import the server-side function
import DatePicker from "react-datepicker";

const AppointmentForm = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: new Date(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // console.log(response);
      if (response.ok) {
        // console.log("Appointment booked!");
        setMessage("Appointment booked!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.error("Error booking appointment");
        setMessage("Error booking appointment");
      }
    } catch (error) {
      console.error("Something went wrong!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex flex-col m-1">
        <label className="font-bold text-gray-500">Name</label>
        <input
          type="text"
          className="p-2 outline-none"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="flex flex-col m-1">
        <label className="font-bold text-gray-500">Email</label>
        <input
          type="email"
          className="p-2 outline-none"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col m-1">
        <label className="font-bold text-gray-500">Phone</label>
        <input
          type="text"
          className="p-2 outline-none"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="flex flex-col m-1">
        <label className="font-bold text-gray-500">Message</label>
        <textarea
          type="text"
          required
          className="p-2 outline-none"
          placeholder="Write message..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col m-1">
        <label className="font-bold text-gray-500">
          Appointment Date and Time
        </label>
        <DatePicker
          selected={formData.date}
          onChange={(date) => setFormData({ ...formData, date })}
          showTimeSelect
          dateFormat="Pp"
          className="p-2 outline-none"
        />
      </div>
      <div className="flex  justify-between m-1 mt-3">
        <button
          type="submit"
          className="btn  bg-blue-500 text-white font-bold w-32"
        >
          Send
        </button>
        <p className="">{message && message}</p>
      </div>
    </form>
  );
};

export default AppointmentForm;
