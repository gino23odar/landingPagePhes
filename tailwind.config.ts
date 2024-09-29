import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "bluegreen": "#006884",
        "navyblue": "#053225",
        "concretewhite": "#f2f1ef",
        "teal": "#97bcc7",
        "realred": "#DD5B87",
        "titlecolor": "#053225",
      },
      boxShadow: {
        'comic': '20px 20px 10px -10px rgba(0, 0, 0, 0.9)',
        'comicrev': '-25px -25px 10px -10px rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [],
};
export default config;
