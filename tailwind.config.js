const config = require("@doyourthing/ui/themeConfig");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@doyourthing/ui/**/*.{js,ts,jsx,tsx}",
	],
	presets: [config],
	theme: {},
	plugins: [],
};
