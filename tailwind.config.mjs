/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionDuration: {
				'1200': '1200ms',
				'1500': '1500ms',
				'2000': '2000ms'
			}
		},
	},
	plugins: [],
	safelist: []
}
