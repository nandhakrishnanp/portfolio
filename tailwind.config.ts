
import type { Config } from "tailwindcss";

// Import Google Font using next/font/google
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent:"#c7c7c7",
        bg : "#222222",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        space: ["var(--font-space-grotesk)", ...fontFamily.sans],
      },
      animation:{
        'infinite-scroll': 'infinite-scroll 25s linear infinite',

      }
      ,
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }   
    },
  },
  plugins: [],
} satisfies Config;
