import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ramos-orange": "#FE4A23",
        "ramos-yellow": "#FFD027",
        "ramos-grey": "#F0F0F0",
        "ramos-grey-100": "#999999",
        "ramos-grey-200": "#CCCCCC",
        "ramos-black": "#0D0D0D",
      },
      borderRadius: {
        "4xl": "3.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
