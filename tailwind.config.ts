import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "background-pan": "background-pan 3s ease-in-out infinite",
        "float-up": "float-up 24s ease-in-out alternate infinite",
      },
      animationDelay: {
        "2s": "2s",
        "4s": "4s",
        "6s": "6s",
      },
      keyframes: {
        "background-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "-200% 50%" },
        },
        "float-up": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "6.25%": {
            transform: "translateX(25px) translateY(-125px) rotate(45deg)",
          },
          "12.5%": {
            transform: "translateX(50px) translateY(-250px) rotate(90deg)",
          },
          "18.75%": {
            transform: "translateX(0px) translateY(-375px) rotate(22.5deg)",
          },
          "25%": {
            transform: "translateX(-50px) translateY(-500px) rotate(-45deg)",
          },
          "31.25%": {
            transform: "translateX(0px) translateY(-625px) rotate(12.5deg)",
          },
          "37.5%": {
            transform: "translateX(50px) translateY(-750px) rotate(70deg)",
          },
          "43.75%": {
            transform: "translateX(0px) translateY(-875px) rotate(32.5deg)",
          },
          "50%": {
            transform: "translateX(-50px) translateY(-1000px) rotate(-5deg)",
          },
          "56.25%": {
            transform: "translateX(0px) translateY(-1125px) rotate(-2.5deg)",
          },
          "62.5%": {
            transform: "translateX(50px) translateY(-1250px) rotate(10deg)",
          },
          "68.75%": {
            transform: "translateX(0px) translateY(-1375px) rotate(50deg)",
          },
          "75%": {
            transform: "translateX(-50px) translateY(-1500px) rotate(100deg)",
          },
          "81.25%": {
            transform: "translateX(0px) translateY(-1625px) rotate(50deg)",
          },
          "87.5%": {
            transform: "translateX(50px) translateY(-1750px) rotate(25deg)",
          },
          "93.75%": {
            transform: "translateX(0px) translateY(-1875px) rotate(12.5deg)",
          },
          "100%": {
            transform: "translateX(-50px) translateY(-2000px) rotate(0deg)",
          },
        },
      },
      dropShadow: {
        rxl: "4px 20px 10px rgba(0, 0, 0,  0.40)",
      },
      height: {
        halfscreen: "50vh",
        screenx1_5: "150vh",
        screenx2: "200vh",
      },
      gridTemplateColumns: {
        "60/40": "60% 40%",
      },
      backgroundPosition: {
        meImg: "70% 30%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        mainpurple: "#771795",
        codegreen: "#33ff00",
        sharpred: "#c52233",
        accentorange: "#ff934f",
        accentlavender: "#e7e6f7",
        accentgray: "#706563",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
