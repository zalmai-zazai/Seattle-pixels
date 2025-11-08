import { useState } from "react";
import { addAppointment } from "@/lib/action";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: new Date(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(
          "🎉 Appointment booked successfully! We'll contact you soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          date: new Date(),
        });
      } else {
        setMessage("❌ Error booking appointment. Please try again.");
      }
    } catch (error) {
      console.error("Something went wrong!", error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold text-base-content">
            Full Name
          </span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full focus:input-primary transition-all duration-300"
          placeholder="Enter your full name"
          required
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </div>

      {/* Email Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold text-base-content">
            Email Address
          </span>
        </label>
        <input
          type="email"
          className="input input-bordered w-full focus:input-primary transition-all duration-300"
          placeholder="your.email@example.com"
          required
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>

      {/* Phone Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold text-base-content">
            Phone Number
          </span>
        </label>
        <input
          type="tel"
          className="input input-bordered w-full focus:input-primary transition-all duration-300"
          placeholder="(555) 123-4567"
          required
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
        />
      </div>

      {/* Message Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold text-base-content">
            Project Details
            <span className="text-sm font-normal text-base-content/60 ml-2">
              (Tell us about your website needs)
            </span>
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full h-32 focus:textarea-primary transition-all duration-300 resize-none"
          placeholder="Please describe your project, business type, timeline, and any specific requirements..."
          required
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
        />
      </div>

      {/* Date Picker */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold text-base-content">
            Preferred Consultation Time
          </span>
        </label>
        <div className="relative">
          <DatePicker
            selected={formData.date}
            onChange={(date) => handleInputChange("date", date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={new Date()}
            className="input input-bordered w-full focus:input-primary transition-all duration-300"
            placeholderText="Select date and time"
            popperClassName="z-50"
          />
          <div className="absolute right-3 top-3 text-base-content/40">📅</div>
        </div>
        <div className="text-xs text-base-content/60 mt-2">
          Well confirm your appointment via email
        </div>
      </div>

      {/* Submit Button & Message */}
      <div className="form-control mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn btn-primary btn-lg w-full font-semibold hover-glow transform transition-all duration-300 ${
            isSubmitting ? "loading" : "hover:scale-105"
          }`}
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner"></span>
              Booking Appointment...
            </>
          ) : (
            <>
              Book Free Consultation
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </>
          )}
        </button>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`mt-4 p-4 rounded-xl transition-all duration-500 ${
              message.includes("❌")
                ? "bg-error/10 border border-error/20 text-error"
                : "bg-success/10 border border-success/20 text-success"
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">
                {message.includes("❌") ? "❌" : "🎉"}
              </span>
              <span className="font-medium">
                {message.replace(/[❌🎉]/g, "").trim()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Privacy Note */}
      <div className="text-center mt-6">
        <p className="text-sm text-base-content/60">
          🔒 Your information is secure. We respect your privacy and never share
          your data.
        </p>
      </div>

      {/* Quick Response Info */}
      <div className="bg-base-200 rounded-xl p-4 mt-4 border border-base-300">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">⚡</span>
          <div>
            <h4 className="font-semibold text-base-content text-sm">
              Fast Response Guarantee
            </h4>
            <p className="text-base-content/70 text-xs">
              We typically respond within 2-4 hours during business days
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AppointmentForm;
