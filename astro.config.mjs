import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import icon from "astro-icon";
import { sidebarConfig } from "./config-utils/sidebar";

const DEV_PORT = 8432;
const isLocalDevelopment = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  server: {
		port: DEV_PORT
	},
	output: "static",
	base: '/',
	site: isLocalDevelopment
	  ? `http://localhost:${DEV_PORT}`
	  : 'https://1fe.com',
  integrations: [starlight({
			title: 'Docs',
			social: {
				github: 'https://github.com/docusign/1fe',
			},
			logo: {
			  src: './src/assets/1fe-logo.svg',
			},
			sidebar: sidebarConfig,
			disable404Route: true,
			redirects: {
				'/getting-started/installation': '/start-here',
				'/getting-started/local-development': '/tutorials/setup-and-deploy-1fe-poc/develop-locally',
				'/getting-started/deploy-poc': '/tutorials/setup-and-deploy-1fe-poc/deploy-poc',
			},
			expressiveCode: {
			  // You can optionally override the plugin's default settings here
			  frames: {},
			  plugins: [pluginLineNumbers()],
			  themes: ['dracula', 'github-light'],
			},
		}),tailwind(), mdx(), icon(), react(), sitemap()],
});
