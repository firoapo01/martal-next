import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#D50000",
        "brand-red-deep": "#A80000",
        "brand-red-hover": "#C00000",
        "brand-rose": "#FFF5F5",
        "brand-nude": "#E8CFCF",
        "brand-beige": "#F1E5DC",
        "brand-green": "#25D366",
        "brand-green-dark": "#1DA851",
        "text-main": "#1A1A1A",
        "text-muted": "#777777",
        "text-light": "#AAAAAA",
        surface: "#FFFFFF",
        "border-soft": "#F0E8E8",
        "border-md": "#E5D5D5",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        red: "0 4px 20px rgba(213,0,0,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
