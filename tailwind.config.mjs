/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			boxShadow: {
				"custom": "0px 0px 100px 0px rgba(12,197,234,0.10)",
				"custom-inset-dark-mode": "0px 0px 60px 1px rgba(12,197,234,0.35) inset",
				"custom-inset-light-mode": "0px 0px 60px 1px rgba(29,78,216,0.65) inset", // blue-700
			},
			fontFamily: {
				"unifontex": 'UnifontEX',
			},
			transitionDuration: {
				'1200': '1200ms',
				'1500': '1500ms',
				'2000': '2000ms',
			},
			colors: {
				'customBlue': 'rgba(12,197,234,0.65)'
			}
		},
	},
	plugins: [
		function({ addUtilities }) {
		  addUtilities({
			'.preserve-3d': {
			  'transform-style': 'preserve-3d',
			},
			'.backface-hidden': {
			  'backface-visibility': 'hidden',
			},
		  })
		},
	  ],
	safelist: []
}
