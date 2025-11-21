// pages/admin/appointments.js
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AppointmentList from "@/components/account/AppointmentList";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
    thisWeek: 0,
  });
  const [loadingStats, setLoadingStats] = useState(true);
  const sectionRef = useRef(null);
  const router = useRouter();

  // Simple password protection - you can change this password
  const ADMIN_PASSWORD = "seattlepixels2024";

  useEffect(() => {
    // Check if already authenticated (basic session storage)
    const authStatus = sessionStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isAuthenticated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isAuthenticated]);

  // NEW: Fetch real statistics
  const fetchStats = async () => {
    try {
      setLoadingStats(true);
      const response = await fetch("/api/appointment");

      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }

      const data = await response.json();
      const appointments = data.appointments || [];

      // Calculate statistics
      const now = new Date();
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      startOfWeek.setHours(0, 0, 0, 0);

      const thisWeekAppointments = appointments.filter((appt) => {
        const apptDate = new Date(appt.date);
        return apptDate >= startOfWeek && appt.status !== "cancelled";
      });

      setStats({
        total: appointments.length,
        pending: appointments.filter((a) => a.status === "pending").length,
        confirmed: appointments.filter((a) => a.status === "confirmed").length,
        completed: appointments.filter((a) => a.status === "completed").length,
        cancelled: appointments.filter((a) => a.status === "cancelled").length,
        thisWeek: thisWeekAppointments.length,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoadingStats(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchStats();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuthenticated", "true");
      setError("");
    } else {
      setError("Invalid password. Please try again.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuthenticated");
    setPassword("");
  };

  // NEW: Refresh stats function
  const handleRefreshStats = () => {
    fetchStats();
  };

  // Login Form - Simple Password Protection
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-4">
                🔒
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-base-content mb-2">
                Admin Access Required
              </h1>
              <p className="text-base-content/70 text-sm sm:text-base">
                Enter the admin password to access the appointments dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-sm sm:text-base">
                    Admin Password
                  </span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full focus:input-primary text-sm sm:text-base"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              {error && (
                <div className="alert alert-error py-3">
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary w-full btn-lg text-sm sm:text-base"
              >
                🔑 Access Dashboard
              </button>
            </form>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-base-200 rounded-lg border border-base-300">
              <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-base-content/70">
                <span>💡</span>
                <span>
                  This page is restricted to authorized personnel only.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Stats configuration with real data
  const statCards = [
    {
      label: "Total Appointments",
      value: stats.total,
      icon: "📅",
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Pending",
      value: stats.pending,
      icon: "⏰",
      color: "from-orange-500 to-amber-500",
    },
    {
      label: "Confirmed",
      value: stats.confirmed,
      icon: "✅",
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "This Week",
      value: stats.thisWeek,
      icon: "📊",
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Main Dashboard (only shown when authenticated)
  return (
    <>
      <PageMetaTags
        title="Admin Dashboard - Appointments | Seattle Pixels"
        description="Admin dashboard for managing client appointments and consultations."
        url="/admin/appointments"
      />

      <div
        ref={sectionRef}
        className="min-h-screen bg-base-100 transition-colors duration-500"
      >
        {/* Admin Header Bar - MOBILE FRIENDLY */}
        <div className="bg-base-200 border-b border-base-300">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-3 sm:py-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white text-sm sm:text-base">
                  ⚡
                </div>
                <div>
                  <h1 className="font-bold text-base-content text-sm sm:text-base">
                    Admin Dashboard
                  </h1>
                  <p className="text-base-content/60 text-xs sm:text-sm">
                    Appointment Management
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4">
                <button
                  onClick={handleRefreshStats}
                  className="btn btn-sm btn-outline btn-primary gap-1 sm:gap-2 text-xs"
                  disabled={loadingStats}
                >
                  {loadingStats ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    "🔄"
                  )}
                  <span className="hidden xs:inline">Refresh</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline btn-error gap-1 sm:gap-2 text-xs"
                >
                  <span>🚪</span>
                  <span className="hidden xs:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div
          className={`max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Appointments Dashboard
            </h1>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 sm:mt-4 rounded-full"></div>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-base-content/80 max-w-2xl mx-auto px-2">
              Manage client consultations and track scheduled appointments
            </p>
          </div>

          {/* Quick Stats - MOBILE RESPONSIVE */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {statCards.map((stat, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg sm:shadow-xl border border-base-300 transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-base-content/70 text-xs sm:text-sm font-medium truncate">
                      {stat.label}
                    </p>
                    <div className="flex items-baseline space-x-1 sm:space-x-2">
                      <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-base-content mt-1">
                        {loadingStats ? (
                          <span className="loading loading-spinner loading-xs"></span>
                        ) : (
                          stat.value
                        )}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-sm sm:text-base lg:text-xl transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ml-2`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status Overview Bar - MOBILE FRIENDLY */}
          <div
            className={`bg-base-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-base-300 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-lg sm:text-xl">
                  📈
                </div>
                <div>
                  <h3 className="font-bold text-base-content text-base sm:text-lg">
                    Appointment Overview
                  </h3>
                  <p className="text-base-content/70 text-sm">
                    Real-time status breakdown
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <div className="stats stats-vertical xs:stats-horizontal shadow w-full">
                  <div className="stat py-2 sm:py-3">
                    <div className="stat-figure text-warning text-sm sm:text-base">
                      ⏰
                    </div>
                    <div className="stat-title text-xs sm:text-sm">Pending</div>
                    <div className="stat-value text-warning text-sm sm:text-lg">
                      {loadingStats ? "-" : stats.pending}
                    </div>
                  </div>

                  <div className="stat py-2 sm:py-3">
                    <div className="stat-figure text-info text-sm sm:text-base">
                      ✅
                    </div>
                    <div className="stat-title text-xs sm:text-sm">
                      Confirmed
                    </div>
                    <div className="stat-value text-info text-sm sm:text-lg">
                      {loadingStats ? "-" : stats.confirmed}
                    </div>
                  </div>

                  <div className="stat py-2 sm:py-3">
                    <div className="stat-figure text-success text-sm sm:text-base">
                      🎉
                    </div>
                    <div className="stat-title text-xs sm:text-sm">
                      Completed
                    </div>
                    <div className="stat-value text-success text-sm sm:text-lg">
                      {loadingStats ? "-" : stats.completed}
                    </div>
                  </div>

                  <div className="stat py-2 sm:py-3">
                    <div className="stat-figure text-error text-sm sm:text-base">
                      ❌
                    </div>
                    <div className="stat-title text-xs sm:text-sm">
                      Cancelled
                    </div>
                    <div className="stat-value text-error text-sm sm:text-lg">
                      {loadingStats ? "-" : stats.cancelled}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Action Bar - MOBILE FRIENDLY */}
          <div
            className={`bg-base-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-base-300 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-lg sm:text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="font-bold text-base-content text-base sm:text-lg">
                    Quick Actions
                  </h3>
                  <p className="text-base-content/70 text-sm">
                    Manage appointments efficiently
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full lg:w-auto justify-start">
                <button
                  onClick={handleRefreshStats}
                  className="btn btn-sm sm:btn-md btn-primary gap-2 flex-1 sm:flex-none min-w-0"
                  disabled={loadingStats}
                >
                  {loadingStats ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    "🔄"
                  )}
                  <span className="truncate">Refresh Data</span>
                </button>
                <button className="btn btn-sm sm:btn-md btn-outline btn-primary gap-2 flex-1 sm:flex-none min-w-0">
                  <span>📧</span>
                  <span className="hidden xs:inline">Export CSV</span>
                </button>
                <button className="btn btn-sm sm:btn-md btn-outline btn-primary gap-2 flex-1 sm:flex-none min-w-0">
                  <span>📋</span>
                  <span className="hidden xs:inline">View All</span>
                </button>
              </div>
            </div>
          </div>

          {/* Appointments List */}
          <div
            className={`transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-base-100 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-base-300 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-base-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-base-content">
                      Recent Appointments
                    </h2>
                    <p className="text-base-content/70 text-sm mt-1">
                      Manage and view all client appointments
                    </p>
                  </div>
                  <div className="text-xs sm:text-sm text-base-content/60">
                    Last updated: {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
              <AppointmentList />
            </div>
          </div>

          {/* Admin Tools - MOBILE RESPONSIVE */}
          {/* <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 transition-all duration-700 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-base-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-base-300">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-sm sm:text-base">
                  ⚙️
                </div>
                <h3 className="font-bold text-base-content text-sm sm:text-base">
                  Settings
                </h3>
              </div>
              <p className="text-base-content/70 text-xs sm:text-sm mb-3 sm:mb-4">
                Configure appointment settings and notifications
              </p>
              <button className="btn btn-sm btn-outline btn-primary w-full text-xs">
                Configure Settings
              </button>
            </div>

            <div className="bg-base-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-base-300">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary text-sm sm:text-base">
                  📊
                </div>
                <h3 className="font-bold text-base-content text-sm sm:text-base">
                  Analytics
                </h3>
              </div>
              <p className="text-base-content/70 text-xs sm:text-sm mb-3 sm:mb-4">
                View appointment analytics and insights
              </p>
              <button className="btn btn-sm btn-outline btn-primary w-full text-xs">
                View Analytics
              </button>
            </div>

            <div className="bg-base-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-base-300">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent text-sm sm:text-base">
                  🔔
                </div>
                <h3 className="font-bold text-base-content text-sm sm:text-base">
                  Notifications
                </h3>
              </div>
              <p className="text-base-content/70 text-xs sm:text-sm mb-3 sm:mb-4">
                Manage email and SMS notifications
              </p>
              <button className="btn btn-sm btn-outline btn-primary w-full text-xs">
                Notification Settings
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
