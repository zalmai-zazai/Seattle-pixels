/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        "seattle-light": {
          primary: "#3B82F6", // Brand blue
          secondary: "#1E40AF", // Darker blue
          accent: "#6366F1", // Indigo accent
          neutral: "#374151", // Gray
          "base-100": "#FFFFFF", // White background
          "base-200": "#F8FAFC", // Light gray
          "base-300": "#F1F5F9", // Lighter gray
          info: "#0EA5E9", // Sky blue
          success: "#10B981", // Emerald
          warning: "#F59E0B", // Amber
          error: "#EF4444", // Red
        },
        "seattle-dark": {
          primary: "#60A5FA", // Lighter blue for dark mode
          secondary: "#3B82F6", // Brand blue
          accent: "#818CF8", // Lighter indigo
          neutral: "#9CA3AF", // Light gray text
          "base-100": "#0F172A", // Dark blue-gray background
          "base-200": "#1E293B", // Slightly lighter dark
          "base-300": "#334155", // Even lighter dark
          info: "#38BDF8", // Bright sky blue
          success: "#34D399", // Bright emerald
          warning: "#FBBF24", // Bright amber
          error: "#F87171", // Bright red
        },
      },
      "light", // Keep original light as fallback
      "dark", // Keep original dark as fallback
    ],
  },
};
