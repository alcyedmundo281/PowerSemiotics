module.exports = {
  darkMode: "class",
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#8B3DFF",
        secondary: "#FF4081",
        "background-light": "#F8FAFC",
        "background-dark": "#0F172A",
        "card-light": "#FFFFFF",
        "card-dark": "#1E293B",
        "text-light": "#334155",
        "text-dark": "#E2E8F0",
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "1rem",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
