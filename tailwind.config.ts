import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--background)",
        secondBg: "var(--second-background)",
        bgTransparent: "var(--bg-transparent)",
        textColor: "var(--text-color)",
        titleColor: "var(--title-color)",
        mainColor: "var(--main-color)",
        conicGradiend: "var(--conic-gradient)",
      },
      fontFamily: {
        noto: "var(--noto-sans-display)",
        inter: "var(--font-inter)",
      },
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;