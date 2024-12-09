import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        pulse: {
          "50%": {
            opacity: ".8",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(0px)" },
          "75%": { transform: "translateX(2px)" },
        },
        shiftLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100px)" }, // Adjust -100px to how far left you want it to go
        },
        "scale-up": {
          from: { transform: "scale(0.6)" },
          to: { transform: "scale(1)" },
        },
        "scale-down": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite", // animate-[wiggle_1s_ease-in-out_infinite]
        shake: "shake 0.3s linear infinite",
        "shift-left": "shiftLeft 0.5s ease-in-out forwards",
        "scale-up": "scale-up 0.5s ease-in-out forwards",
        "scale-down": "scale-down 0.5s ease-in-out forwards",
        "fade-out": "fade-out 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
