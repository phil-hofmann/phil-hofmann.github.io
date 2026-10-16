import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ['"Avenir Next"', "Avenir", "sans-serif"],
      },
      borderWidth: {
        "1.5": "1.5px",
        "3": "3px",
      },
      colors: {
        background: "#ffffff",
        foreground: "#073b4c",
        primary: "#06d6a0",
        accent: "#05c08f",
      },
    },
  },
  plugins: [],
};
export default config;
