module.exports = {
  theme: {
    extend: {
      animation: {
        text: "text 2s ease infinite",
      },
      screens: {
        "7xl": "2000px",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
