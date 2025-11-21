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
          <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🔒
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-base-content mb-2">
                Admin Access Required
              </h1>
              <p className="text-base-content/70">
                Enter the admin password to access the appointments dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Admin Password
                  </span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full focus:input-primary"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              {error && (
                <div className="alert alert-error">
                  <span>{error}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary w-full btn-lg">
                🔑 Access Dashboard
              </button>
            </form>

            <div className="mt-6 p-4 bg-base-200 rounded-lg border border-base-300">
              <div className="flex items-center space-x-3 text-sm text-base-content/70">
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
      change: "+0", // We can make this dynamic later
    },
    {
      label: "Pending",
      value: stats.pending,
      icon: "⏰",
      color: "from-orange-500 to-amber-500",
      change: "+0",
    },
    {
      label: "Confirmed",
      value: stats.confirmed,
      icon: "✅",
      color: "from-green-500 to-emerald-500",
      change: "+0",
    },
    {
      label: "This Week",
      value: stats.thisWeek,
      icon: "📊",
      color: "from-purple-500 to-pink-500",
      change: "+0",
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
        {/* Admin Header Bar */}
        <div className="bg-base-200 border-b border-base-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white">
                  ⚡
                </div>
                <div>
                  <h1 className="font-bold text-base-content">
                    Admin Dashboard
                  </h1>
                  <p className="text-sm text-base-content/60">
                    Appointment Management
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleRefreshStats}
                  className="btn btn-sm btn-outline btn-primary gap-2"
                  disabled={loadingStats}
                >
                  {loadingStats ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    "🔄"
                  )}
                  Refresh
                </button>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline btn-error gap-2"
                >
                  <span>🚪</span>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Appointments Dashboard
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg lg:text-xl text-base-content/80 max-w-2xl mx-auto">
              Manage client consultations and track scheduled appointments
            </p>
          </div>

          {/* Quick Stats - UPDATED WITH REAL DATA */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {statCards.map((stat, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-2xl p-6 shadow-xl border border-base-300 transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/70 text-sm font-medium">
                      {stat.label}
                    </p>
                    <div className="flex items-baseline space-x-2">
                      <p className="text-2xl lg:text-3xl font-bold text-base-content mt-1">
                        {loadingStats ? (
                          <span className="loading loading-spinner loading-xs"></span>
                        ) : (
                          stat.value
                        )}
                      </p>
                      {/* We can make this dynamic later */}
                      {/* <span className="text-sm text-green-500 font-semibold">
                        {stat.change}
                      </span> */}
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-xl transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status Overview Bar */}
          <div
            className={`bg-base-200 rounded-2xl p-6 mb-8 border border-base-300 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-xl">
                  📈
                </div>
                <div>
                  <h3 className="font-bold text-base-content text-lg">
                    Appointment Overview
                  </h3>
                  <p className="text-base-content/70">
                    Real-time status breakdown
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="stats stats-horizontal shadow">
                  <div className="stat">
                    <div className="stat-figure text-warning">⏰</div>
                    <div className="stat-title">Pending</div>
                    <div className="stat-value text-warning text-lg">
                      {loadingStats ? "-" : stats.pending}
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-info">✅</div>
                    <div className="stat-title">Confirmed</div>
                    <div className="stat-value text-info text-lg">
                      {loadingStats ? "-" : stats.confirmed}
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-success">🎉</div>
                    <div className="stat-title">Completed</div>
                    <div className="stat-value text-success text-lg">
                      {loadingStats ? "-" : stats.completed}
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-error">❌</div>
                    <div className="stat-title">Cancelled</div>
                    <div className="stat-value text-error text-lg">
                      {loadingStats ? "-" : stats.cancelled}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div
            className={`bg-base-200 rounded-2xl p-6 mb-8 border border-base-300 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="font-bold text-base-content text-lg">
                    Quick Actions
                  </h3>
                  <p className="text-base-content/70">
                    Manage appointments efficiently
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleRefreshStats}
                  className="btn btn-primary gap-2"
                  disabled={loadingStats}
                >
                  {loadingStats ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    "🔄"
                  )}
                  Refresh Data
                </button>
                <button className="btn btn-outline btn-primary gap-2">
                  <span>📧</span>
                  Export CSV
                </button>
                <button className="btn btn-outline btn-primary gap-2">
                  <span>📋</span>
                  View All
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
            <div className="bg-base-100 rounded-2xl shadow-xl border border-base-300 overflow-hidden">
              <div className="p-6 border-b border-base-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-base-content">
                      Recent Appointments
                    </h2>
                    <p className="text-base-content/70 mt-1">
                      Manage and view all client appointments
                    </p>
                  </div>
                  <div className="text-sm text-base-content/60">
                    Last updated: {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
              <AppointmentList />
            </div>
          </div>

          {/* Admin Tools */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 transition-all duration-700 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  ⚙️
                </div>
                <h3 className="font-bold text-base-content">Settings</h3>
              </div>
              <p className="text-base-content/70 text-sm mb-4">
                Configure appointment settings and notifications
              </p>
              <button className="btn btn-sm btn-outline btn-primary w-full">
                Configure Settings
              </button>
            </div>

            <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary">
                  📊
                </div>
                <h3 className="font-bold text-base-content">Analytics</h3>
              </div>
              <p className="text-base-content/70 text-sm mb-4">
                View appointment analytics and insights
              </p>
              <button className="btn btn-sm btn-outline btn-primary w-full">
                View Analytics
              </button>
            </div>

            <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                  🔔
                </div>
                <h3 className="font-bold text-base-content">Notifications</h3>
              </div>
              <p className="text-base-content/70 text-sm mb-4">
                Manage email and SMS notifications
              </p>
              <button className="btn btn-sm btn-outline btn-primary w-full">
                Notification Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
