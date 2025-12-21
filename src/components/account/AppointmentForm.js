// components/account/AppointmentForm.js
import { useState } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: new Date(),
  });

  // Simple phone formatting
  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6)
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
      6,
      10
    )}`;
  };

  // SIMPLE TIME FILTER: Only show times between 9 AM and 5 PM
  const filterTime = (time) => {
    const hours = time.getHours();
    return hours >= 9 && hours < 17; // 9 AM to 5 PM
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone.replace(/\D/g, ""),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          "📝 Appointment request submitted successfully! We'll review and confirm via email within 2-4 hours."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          date: new Date(),
        });
        try {
          if (typeof gtag === "function") {
            gtag("event", "conversion", {
              send_to: "AW-17759596364/YOUR_CONVERSION_ID",
              value: 1.0,
              currency: "USD",
            });
          }
        } catch (err) {
          console.error("Google Ads conversion error:", err);
        }
      } else {
        toast.error(
          data.message || "❌ Error booking appointment. Please try again."
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error(
        "❌ Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    if (field === "phone") {
      const formatted = formatPhone(value);
      setFormData((prev) => ({ ...prev, phone: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Full Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Enter your full name"
          required
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </div>

      {/* Email Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Email Address</span>
        </label>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="your.email@example.com"
          required
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>

      {/* Phone Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Phone Number</span>
        </label>
        <input
          type="tel"
          className="input input-bordered w-full"
          placeholder="(555) 123-4567"
          required
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          maxLength={14}
        />
      </div>

      {/* Message Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Project Details</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full h-32"
          placeholder="Please describe your project, business type, timeline, and any specific requirements..."
          required
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
        />
      </div>

      {/* Date Picker - ONLY SHOWS 9 AM to 5 PM */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">
            Preferred Consultation Time
          </span>
        </label>
        <DatePicker
          selected={formData.date}
          onChange={(date) => handleInputChange("date", date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
          filterTime={filterTime} // THIS IS THE KEY LINE
          className="input input-bordered w-full"
          placeholderText="Select date and time (9 AM - 5 PM)"
        />
        <div className="text-xs text-base-content/60 mt-2">
          Available times: 9:00 AM - 5:00 PM, every 30 minutes
        </div>
      </div>

      {/* Submit Button */}
      <div className="form-control mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn btn-primary btn-lg w-full ${
            isSubmitting ? "loading" : ""
          }`}
        >
          {isSubmitting ? "Booking Appointment..." : "Book Free Consultation"}
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
