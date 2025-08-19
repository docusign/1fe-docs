/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
      // Configure prose for Starlight's dark mode
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Use CSS custom properties for light mode that fallback gracefully
            "--tw-prose-body": "var(--sl-color-text)",
            "--tw-prose-headings": "var(--sl-color-text)",
            "--tw-prose-links": "var(--sl-color-text-accent)",
            "--tw-prose-bold": "var(--sl-color-text)",
            "--tw-prose-counters": "var(--sl-color-text-accent)",
            "--tw-prose-bullets": "var(--sl-color-text-accent)",
            "--tw-prose-hr": "var(--sl-color-hairline)",
            "--tw-prose-quotes": "var(--sl-color-text)",
            "--tw-prose-quote-borders": "var(--sl-color-accent)",
            "--tw-prose-captions": "var(--sl-color-text)",
            "--tw-prose-code": "var(--sl-color-text)",
            "--tw-prose-pre-code": "var(--sl-color-text)",
            "--tw-prose-pre-bg": "var(--sl-color-bg-sidebar)",
            "--tw-prose-th-borders": "var(--sl-color-hairline)",
            "--tw-prose-td-borders": "var(--sl-color-hairline)",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
