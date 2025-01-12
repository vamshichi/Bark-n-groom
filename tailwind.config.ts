import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          'royal-blue-900': '#1c3b57',
          'royal-blue-700': '#2b4e73',
          'royal-blue-500': '#3a608f',
          'gold-400': '#f5c542',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
