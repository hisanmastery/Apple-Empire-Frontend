import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  screens: {
    "ssm": "320px",
    "msm": "380px",
    "lsm": "450px",
  },
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xsm: '300px',
        ssm: '370px',
        msm: '420px',
        lsm: '480px',
        xmd: '520px',
        smd: '560px',
        mmd: '600px',
        lmd: '620px',
        // You can keep the default ones as well if needed
        sm: '640px',   // Small screens
        md: '768px',   // Medium screens
        lg: '1024px',  // Large screens
        xl: '1280px',  // Extra large screens
        '2xl': '1536px', // 2x extra large screens
      },
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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        _primary: "#EE3F0B", // blue
        _secondary: "#00E0C6 ", //Crystal Blue
        "_dark-color": "#245EB5", // hover dark blue
        "_light-blue": "#E6F4FF", // light blue for bacground
        "_primary-bg": "#EFF1F0", //Seashell
        "_primary-text": "#929E9C", //star dust
        "_secondary-text": "#fafafa",
        "_white-ice": "#D7FAF4", // semi white
        _white: "#FFFFFF", // pure white
        _black: "#000000",
        _green: "#0BDA51",
        _green_ice: "#98FB98",
        _blue: "#1868D5",
        _gray: "#797D7F",
        qyellow: "#FFBB38",
        _orange:"#ea580c"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config