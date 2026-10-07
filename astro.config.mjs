// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import externalLinks from './src/plugins/external-links.mjs';

const site = 'https://scriptura.prinke.dev';

// https://astro.build/config
export default defineConfig({
	site,
	markdown: {
		processor: satteri({ hastPlugins: [externalLinks({ site })] }),
	},
	// Old Docusaurus URLs, so existing links (e.g. in the Discord app listing) keep working.
	redirects: {
		'/docs/intro': '/getting-started',
		'/docs/commands': '/commands',
		'/docs/translations': '/translations',
		'/docs/formatting': '/references',
		'/docs/faq': '/faq',
		'/docs/privacy': '/privacy',
		'/docs/terms': '/terms',
		'/docs/opensource': '/self-hosting',
	},
	integrations: [
		starlight({
			title: 'Scriptura',
			description: 'A free, open-source Discord bot for looking up and searching Bible scripture with slash commands.',
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
			},
			// Theme-aware SVG (black in light mode, white in dark); .ico fallback added in `head`.
			favicon: '/favicon.svg',
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '32x32' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap',
					},
				},
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#2F5233' } },
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/prinketaru/scriptura' }],
			editLink: {
				baseUrl: 'https://github.com/prinke/scriptura-website/edit/master/',
			},
			customCss: ['./src/styles/starlight.css'],
			components: {
				SocialIcons: './src/components/starlight/SocialIcons.astro',
				EditLink: './src/components/starlight/EditLink.astro',
				Footer: './src/components/starlight/Footer.astro',
			},
			sidebar: [
				{
					label: 'Start here',
					items: ['getting-started'],
				},
				{
					label: 'Using Scriptura',
					items: ['commands', 'preferences', 'translations', 'references', 'daily-verse'],
				},
				{
					label: 'In your server',
					items: ['audio', 'daily-channel'],
				},
				{
					label: 'Help',
					items: ['faq', 'privacy', 'terms'],
				},
				{
					label: 'For developers',
					collapsed: true,
					items: ['self-hosting'],
				},
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
