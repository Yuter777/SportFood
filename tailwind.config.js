/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo'dan olingan ranglar
        ink: {
          DEFAULT: "#0d0e12",
          900: "#0d0e12",
          800: "#15171d",
          700: "#1d2027",
          600: "#272b34",
          500: "#3a3f4b",
        },
        steel: {
          DEFAULT: "#5a6172",
          light: "#8b91a0",
        },
        flame: {
          DEFAULT: "#e8281f",
          dark: "#c01a13",
          light: "#ff3b30",
          glow: "#ff5a4d",
        },
      },
      fontFamily: {
        display: ["Oswald", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.25em",
      },
      backgroundImage: {
        "carbon-grad":
          "linear-gradient(135deg, #15171d 0%, #0d0e12 45%, #1d2027 100%)",
        "flame-grad":
          "linear-gradient(135deg, #ff3b30 0%, #e8281f 50%, #c01a13 100%)",
      },
      boxShadow: {
        flame: "0 10px 40px -10px rgba(232, 40, 31, 0.55)",
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.7)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "slide-marquee 30s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
