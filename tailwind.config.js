/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom dark theme palette - WCAG AA compliant
        dark: {
          base: "#0B0B0E", // Deepest background
          surface: "#0F1115", // Main background
          elevated: "#15171D", // Cards, elevated surfaces
          card: "#1A1D24", // Card backgrounds
          border: {
            DEFAULT: "#25282F", // Default borders
            light: "#2D3139", // Lighter borders
            muted: "#1F2329", // Subtle borders
          },
        },
        // Text colors with proper contrast
        text: {
          primary: "#E5E7EB", // Primary text (15.8:1 contrast)
          secondary: "#D1D5DB", // Secondary text (12.6:1 contrast)
          tertiary: "#9CA3AF", // Tertiary text (7.1:1 contrast - AA)
          muted: "#6B7280", // Muted text (4.8:1 - AA for large text)
        },
        // Accent color (indigo) - consistent throughout
        accent: {
          DEFAULT: "#6366F1", // indigo-500
          light: "#818CF8", // indigo-400
          dark: "#4F46E5", // indigo-600
          glow: "rgba(99, 102, 241, 0.1)", // Subtle glow
        },
      },
      boxShadow: {
        "dark-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
        "dark-md": "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
        "dark-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)",
        "dark-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
        "accent-glow": "0 0 20px rgba(99, 102, 241, 0.3)",
        "accent-glow-lg": "0 0 40px rgba(99, 102, 241, 0.2)",
      },
      animation: {
        "spin-slow": "spin-slow 20s infinite linear",
      },
    },
  },
  plugins: [],
};
