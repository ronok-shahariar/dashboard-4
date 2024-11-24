import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          active: "#6b32ec", // Text color for active state
          background: "#f5f5ff", // Background color
          iconColor: "#636c80", // Default text color
        },
      },
      
    },
  },
  plugins: [],
} satisfies Config;
