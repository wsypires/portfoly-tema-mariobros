import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./client/index.html", "./client/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mario-red": "#e74c3c",
        "mario-blue": "#2980b9",
        "mario-green": "#27ae60",
        "mario-yellow": "#f1c40f",
        "mario-orange": "#e67e22",
        "mario-skin": "#f4a460",
        "mario-dark": "#1a1a1a",
        "mario-light": "#ecf0f1",
        "mario-sky": "#87ceeb",
        "mario-grass": "#52b788",
      },
      fontFamily: {
        sans: ["'Press Start 2P'", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
