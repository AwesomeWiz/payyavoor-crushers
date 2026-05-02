/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
				serif: ['"Source Serif Pro"', 'serif'],
			},
			colors: {
				brandBlue: '#007eb5',
				brandGreen: '#1b8b6a',
				brandBg: '#fefdf7', // off-white yellowish background from design
			}
		},
	},
	plugins: [],
}
