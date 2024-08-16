import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["retro", "coffee"],
  },
  darkMode: ['selector', '[data-theme="coffee"]']
};
export default config;
