import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [filter, setFilter] = useState("all");

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

  // Update appointment status (confirm, complete)
  const updateAppointmentStatus = async (id, newStatus) => {
    try {
      const response = await fetch("/api/appointment", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        fetchAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
      toast.error("Error updating appointment status");
    }
  };

  // NEW: Delete appointment permanently
  const deleteAppointment = async (id) => {
    // Confirm before deleting
    if (
      !window.confirm(
        "Are you sure you want to permanently delete this appointment? This action cannot be undone.",
      )
    ) {
      return;
    }

    try {
      const response = await fetch("/api/appointment", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("🗑️ Appointment deleted successfully!");
        fetchAppointments();
      } else {
        toast.error(data.message || "Error deleting appointment");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      toast.error("Error deleting appointment");
    }
  };

  // Get status badge styling
  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { class: "badge-warning", label: "⏰ Pending", icon: "⏰" },
      confirmed: { class: "badge-info", label: "✅ Confirmed", icon: "✅" },
      completed: { class: "badge-success", label: "🎉 Completed", icon: "🎉" },
      cancelled: { class: "badge-error", label: "❌ Cancelled", icon: "❌" },
    };

    return statusConfig[status] || statusConfig.pending;
  };

  // Filter appointments based on status
  const getFilteredAppointments = () => {
    if (filter === "all") return appointments;
    return appointments.filter((appt) => appt.status === filter);
  };

  // Get status counts for filters
  const getStatusCounts = () => {
    const counts = {
      all: appointments.length,
      pending: appointments.filter((a) => a.status === "pending").length,
      confirmed: appointments.filter((a) => a.status === "confirmed").length,
      completed: appointments.filter((a) => a.status === "completed").length,
      cancelled: appointments.filter((a) => a.status === "cancelled").length,
    };
    return counts;
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
  const statusCounts = getStatusCounts();

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Appointments", icon: "📅" },
            { id: "pending", label: "Pending", icon: "⏰" },
            { id: "confirmed", label: "Confirmed", icon: "✅" },
            { id: "completed", label: "Completed", icon: "🎉" },
            { id: "cancelled", label: "Cancelled", icon: "❌" },
          ].map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`btn btn-sm gap-2 transition-all duration-300 ${
                filter === filterOption.id ? "btn-primary" : "btn-outline"
              }`}
            >
              {filterOption.icon} {filterOption.label}
              <span className="badge badge-sm">
                {statusCounts[filterOption.id]}
              </span>
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
            const statusBadge = getStatusBadge(appointment.status);
            const isUpcoming = new Date(appointment.date) > new Date();
            const canComplete =
              appointment.status === "pending" ||
              appointment.status === "confirmed";

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
                          <span
                            className={`badge ${statusBadge.class} badge-sm`}
                          >
                            {statusBadge.icon} {statusBadge.label}
                          </span>
                          {appointment.appointmentId && (
                            <span className="badge badge-outline badge-sm">
                              ID: {appointment.appointmentId}
                            </span>
                          )}
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
                              : appointment,
                          )
                        }
                        className="btn btn-sm btn-outline gap-2"
                      >
                        {selectedAppointment?._id === appointment._id
                          ? "👁️ Hide"
                          : "👁️ View"}
                      </button>

                      {/* Status Action Buttons */}
                      {appointment.status === "pending" && (
                        <button
                          onClick={() =>
                            updateAppointmentStatus(
                              appointment._id,
                              "confirmed",
                            )
                          }
                          className="btn btn-sm btn-info gap-2"
                        >
                          ✅ Confirm
                        </button>
                      )}

                      {canComplete && (
                        <button
                          onClick={() =>
                            updateAppointmentStatus(
                              appointment._id,
                              "completed",
                            )
                          }
                          className="btn btn-sm btn-success gap-2"
                        >
                          🎉 Complete
                        </button>
                      )}

                      {/* REPLACED: Delete button instead of Cancel */}
                      {(appointment.status === "pending" ||
                        appointment.status === "confirmed") && (
                        <button
                          onClick={() => deleteAppointment(appointment._id)}
                          className="btn btn-sm btn-error gap-2"
                        >
                          🗑️ Delete
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Appointment Details - Same as before */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📅 Scheduled:</span>
                        <span>
                          {format(new Date(appointment.date), "PPP 'at' p")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">⏰ Created:</span>
                        <span>
                          {format(
                            new Date(appointment.createdAt),
                            "PPP 'at' p",
                          )}
                        </span>
                      </div>
                    </div>

                    {isUpcoming &&
                      appointment.status !== "completed" &&
                      appointment.status !== "cancelled" && (
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

                  {/* Expanded Details - Same as before */}
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
              <span>{statusCounts.all} total appointments</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="text-warning">
                ⏰ {statusCounts.pending} pending
              </span>
              <span className="text-info">
                ✅ {statusCounts.confirmed} confirmed
              </span>
              <span className="text-success">
                🎉 {statusCounts.completed} completed
              </span>
              <span className="text-error">
                ❌ {statusCounts.cancelled} cancelled
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
