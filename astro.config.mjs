import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import icon from "astro-icon";
import { sidebarConfig } from "./config-utils/sidebar";
import partytown from "@astrojs/partytown";

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
      title: "Docs",
      social: {
        github: "https://github.com/docusign/1fe",
      },
      logo: {
        src: "./src/assets/1fe-logo.svg",
      },
      sidebar: sidebarConfig,
      disable404Route: true,
      head: [
        // Google Analytics via Partytown (production only)
        ...(isLocalDevelopment
          ? []
          : [
              {
                tag: "script",
                attrs: {
                  type: "text/partytown",
                  src: "https://www.googletagmanager.com/gtag/js?id=G-LJPHPJLQ4G",
                },
              },
              {
                tag: "script",
                attrs: {
                  type: "text/partytown",
                },
                content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-LJPHPJLQ4G');
					`,
              },
            ]),
      ],
      expressiveCode: {
        // You can optionally override the plugin's default settings here
        frames: {},
        plugins: [pluginLineNumbers()],
        themes: ["dracula", "github-light"],
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    tailwind(),
    mdx(),
    icon(),
    react(),
    sitemap(),
  ],
});
