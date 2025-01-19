/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		{
			pattern: /bg-(red|green|blue|sky|pink|purple|emerald)-(100|200|300|400|500|600|700|800|900)/,
		},
		{
			pattern: /grid-(rows|cols)-[0-8]/
		}
	]
}
