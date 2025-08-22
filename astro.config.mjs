import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import icon from "astro-icon";
import { sidebarConfig } from "./config-utils/sidebar";

const DEV_PORT = 8432;
const isLocalDevelopment = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  server: {
    port: DEV_PORT,
  },
  output: "static",
  base: "/",
  site: isLocalDevelopment ? `http://localhost:${DEV_PORT}` : "https://1fe.com",
  integrations: [
    starlight({
      title: "1fe Documentation",
      description: "Micro-frontend platform",
      social: {
        github: "https://github.com/docusign/1fe",
      },
      logo: {
        src: "./src/assets/1fe-logo.svg",
      },
      sidebar: sidebarConfig,
      disable404Route: true,
      head: [
        // Open Graph meta tags
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "1fe Documentation",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:locale",
            content: "en_US",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://1fe.com/og-image.svg",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:type",
            content: "image/svg+xml",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:width",
            content: "600",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:height",
            content: "600",
          },
        },
        // Twitter Card meta tags
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://1fe.com/og-image.svg",
          },
        },
      ],
      expressiveCode: {
        // You can optionally override the plugin's default settings here
        frames: {},
        plugins: [pluginLineNumbers()],
        themes: ["dracula", "github-light"],
      },
    }),
    tailwind(),
    mdx(),
    icon(),
    react(),
    sitemap(),
  ],
});
