module.exports = {
  theme: {
    extend: {
      animation: {
        text: "text 2s ease infinite",
      },
      components: {
        PerfectScrollbar
      },
      screens: {
        "7xl": "2000px",
        "sm": "760px",
        "3xl": "1919px",

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
