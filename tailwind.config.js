module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f2f4f6",
          200: "#e9e9e9",
          400: "#afafaf",
          700: "#6a6a6a",
          800: "#505050",
          "800_9e": "#5050509e",
          "200_5b": "#e9e9e95b",
          "200_01": "#eeeeee",
          "400_70": "#afafaf70",
          "200_4c": "#e9e9e94c",
          "400_7f": "#afafaf7f",
          "400_87": "#afafaf87",
          "400_00": "#afafaf00",
        },
        black: {
          900: "#000000",
          "900_7e": "#0000007e",
          "900_14": "#00000014",
          "900_59": "#00000059",
        },
        red: { 400: "#e54949" },
        blue_gray: {
          100: "#d9d9d9",
          900: "#333333",
          "900_6c": "#3333336c",
          "900_87": "#33333387",
          "900_9e": "#3333339e",
        },
        green: { 500: "#47b13d" },
        white: { A700_4c: "#ffffff4c", A700_87: "#ffffff87", A700: "#ffffff" },
        blue: { 800: "#0048d6" },
        yellow: { A700: "#ffd814" },
      },
      fontFamily: { lato: "Lato", barlow: "Barlow" },
      boxShadow: {
        bs1: "0px 4px  20px 0px #00000059",
        bs: "0px 6px  24px 0px #00000014",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#505050,#333333)",
        gradient1: "linear-gradient(180deg ,#5050509e,#3333339e)",
        gradient2: "linear-gradient(135deg ,#e9e9e95b,#e9e9e9,#e9e9e95b)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
