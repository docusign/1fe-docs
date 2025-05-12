// @ts-check
import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

import {
	DEV_PORT,
	GITHUB_PAGES_BASE,
	isLocalDevelopment,
  } from './config-utils/constants';
import { sidebarConfig } from './config-utils/sidebar';

// https://astro.build/config
export default defineConfig({
    integrations: [
		starlight({
			title: 'Docs',
			social: {
				github: 'https://github.com/docusign/1fe',
			},
			logo: {
			  src: './src/assets/1fe-logo.svg',
			},
			sidebar: sidebarConfig,
			customCss: [
                // Path to your Tailwind base styles:
                './src/styles/global.css',
			],
			expressiveCode: {
			  // You can optionally override the plugin's default settings here
			  frames: {},
			  plugins: [pluginLineNumbers()],
			  themes: ['dracula', 'github-light'],
			},
		}), 
		react(),
		astroIcon()
	],
	server: {
		port: DEV_PORT,
	},
	output: "static",
	base: isLocalDevelopment ? '' : GITHUB_PAGES_BASE,
	site: isLocalDevelopment
	  ? `http://localhost:${DEV_PORT}`
	  : 'https://1fe.com',
});