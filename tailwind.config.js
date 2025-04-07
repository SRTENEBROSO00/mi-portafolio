import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        animation: {
          fadeOut : "fadeOut 2.5s ease-in-out forwards",
          fadeIn: "fadeIn .5s ease-in-out forwards"
        },
        keyframes : {
          fadeOut: {
            "0%": { opacity: 1 },
            "100%": { opacity: 0 },
          },
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          moveUp: {
            '0%': {}
          }
      },
    
    },
  },
  plugins: [require("tailwindcss-animate")],
}
}
