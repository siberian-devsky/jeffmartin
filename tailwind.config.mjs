/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				"custom": "0px 0px 100px 0px rgba(12,197,234,0.10)",
			},
			fontFamily: {
				"unifontex": 'UnifontEX',
			},
			transitionDuration: {
				'1200': '1200ms',
				'1500': '1500ms',
				'2000': '2000ms',
			},
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
