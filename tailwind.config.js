const config = require("@doyourthing/ui/themeConfig");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@doyourthing/ui/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		...config.theme,
	},
	plugins: config.plugins,
};
