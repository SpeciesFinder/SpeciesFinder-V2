/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}", // add this line to ensure Tailwind scans all relevant files
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
