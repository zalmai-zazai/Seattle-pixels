import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [filter, setFilter] = useState("all"); // all, upcoming, past

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/appointment");

      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }

      const data = await response.json();
      setAppointments(data.appointments || []);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const response = await axios.delete("/api/appointment", {
        data: { id },
      });

      if (response.data.success) {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment._id !== id)
        );
        setResponseMessage("✅ Appointment marked as completed and removed");
        setSelectedAppointment(null);

        // Clear success message after 3 seconds
        setTimeout(() => setResponseMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      setResponseMessage("❌ Error completing appointment");

      // Clear error message after 3 seconds
      setTimeout(() => setResponseMessage(""), 3000);
    }
  };

  const getFilteredAppointments = () => {
    const now = new Date();
    switch (filter) {
      case "upcoming":
        return appointments.filter((appt) => new Date(appt.date) > now);
      case "past":
        return appointments.filter((appt) => new Date(appt.date) <= now);
      default:
        return appointments;
    }
  };

  const getAppointmentStatus = (appointmentDate) => {
    const now = new Date();
    const appointment = new Date(appointmentDate);

    if (appointment > now) {
      return {
        status: "upcoming",
        color: "text-warning",
        badge: "badge-warning",
      };
    } else {
      return { status: "past", color: "text-error", badge: "badge-error" };
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
          <p className="text-base-content/70">Loading appointments...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <span>Error loading appointments: {error}</span>
        <button
          onClick={fetchAppointments}
          className="btn btn-sm btn-outline ml-4"
        >
          Retry
        </button>
      </div>
    );
  }

  const filteredAppointments = getFilteredAppointments();

  return (
    <div className="space-y-6">
      {/* Response Message */}
      {responseMessage && (
        <div
          className={`alert ${
            responseMessage.includes("❌") ? "alert-error" : "alert-success"
          } transition-all duration-300`}
        >
          <span>{responseMessage}</span>
        </div>
      )}

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {[
            {
              id: "all",
              label: "All Appointments",
              count: appointments.length,
            },
            {
              id: "upcoming",
              label: "Upcoming",
              count: appointments.filter((a) => new Date(a.date) > new Date())
                .length,
            },
            {
              id: "past",
              label: "Past",
              count: appointments.filter((a) => new Date(a.date) <= new Date())
                .length,
            },
          ].map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`btn btn-sm gap-2 transition-all duration-300 ${
                filter === filterOption.id ? "btn-primary" : "btn-outline"
              }`}
            >
              {filterOption.label}
              <span className="badge badge-sm">{filterOption.count}</span>
            </button>
          ))}
        </div>

        <button
          onClick={fetchAppointments}
          className="btn btn-sm btn-outline btn-primary gap-2 ml-auto"
        >
          🔄 Refresh
        </button>
      </div>

      {/* Appointments Grid */}
      {filteredAppointments.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-xl font-bold text-base-content mb-2">
            No {filter !== "all" ? filter : ""} Appointments
          </h3>
          <p className="text-base-content/70">
            {filter === "all"
              ? "No appointments scheduled yet."
              : `No ${filter} appointments found.`}
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredAppointments.map((appointment) => {
            const status = getAppointmentStatus(appointment.date);
            const isUpcoming = new Date(appointment.date) > new Date();

            return (
              <div
                key={appointment._id}
                className={`bg-base-100 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  selectedAppointment?._id === appointment._id
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-base-300"
                }`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0">
                        👤
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-base-content">
                            {appointment.name}
                          </h3>
                          <span className={`badge ${status.badge} badge-sm`}>
                            {status.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
                          <span className="flex items-center gap-1">
                            📧 {appointment.email}
                          </span>
                          <span className="flex items-center gap-1">
                            📞 {appointment.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() =>
                          setSelectedAppointment(
                            selectedAppointment?._id === appointment._id
                              ? null
                              : appointment
                          )
                        }
                        className="btn btn-sm btn-outline gap-2"
                      >
                        {selectedAppointment?._id === appointment._id
                          ? "👁️ Hide"
                          : "👁️ View"}
                      </button>
                      <button
                        onClick={() => deleteAppointment(appointment._id)}
                        className={`btn btn-sm gap-2 ${
                          isUpcoming ? "btn-warning" : "btn-success"
                        }`}
                      >
                        {isUpcoming ? "❌ Cancel" : "✅ Complete"}
                      </button>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📅 Scheduled:</span>
                        <span className={status.color}>
                          {format(new Date(appointment.date), "PPP 'at' p")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">⏰ Created:</span>
                        <span>
                          {format(
                            new Date(appointment.createdAt),
                            "PPP 'at' p"
                          )}
                        </span>
                      </div>
                    </div>

                    {isUpcoming && (
                      <div className="bg-warning/10 rounded-lg p-3 border border-warning/20">
                        <div className="flex items-center gap-2 text-warning">
                          <span>⏰</span>
                          <span className="font-semibold">
                            Upcoming Appointment
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {selectedAppointment?._id === appointment._id && (
                    <div className="mt-6 pt-6 border-t border-base-300 animate-fadeIn">
                      <h4 className="font-semibold text-base-content mb-3 flex items-center gap-2">
                        💬 Project Details
                      </h4>
                      <div className="bg-base-200 rounded-lg p-4">
                        <p className="text-base-content/80 leading-relaxed">
                          {appointment.message ||
                            "No additional details provided."}
                        </p>
                      </div>

                      {/* Quick Actions */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <a
                          href={`mailto:${appointment.email}`}
                          className="btn btn-sm btn-outline gap-2"
                        >
                          📧 Email Client
                        </a>
                        <a
                          href={`tel:${appointment.phone}`}
                          className="btn btn-sm btn-outline gap-2"
                        >
                          📞 Call Client
                        </a>
                        <button className="btn btn-sm btn-outline gap-2">
                          📋 Add Notes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Summary */}
      {appointments.length > 0 && (
        <div className="bg-base-200 rounded-2xl p-4 border border-base-300">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold">📊 Summary:</span>
              <span>{appointments.length} total appointments</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="text-warning">
                ⏰{" "}
                {
                  appointments.filter((a) => new Date(a.date) > new Date())
                    .length
                }{" "}
                upcoming
              </span>
              <span className="text-success">
                ✅{" "}
                {
                  appointments.filter((a) => new Date(a.date) <= new Date())
                    .length
                }{" "}
                completed
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
