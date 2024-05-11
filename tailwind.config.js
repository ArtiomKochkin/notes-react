const plugin = require('tailwindcss/plugin');


/** @type {import('tailwindcss').Config} */

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				light: "#fff",
				dark: "#212121",
				gray: "rgba(245, 245, 244, 0.6)"
			},
			fontFamily: {
				nunito: ["Nunito Sans", "sans-serif"],
			},
			transitionTimingFunction: {
				DEFAULT: "ease-in-out"
			},
			boxShadow: {
				custom: "3px 3px 15px 0px #212121"
			},
			keyframes: {
				slide: {
					from: {
						transform: "translateX(-100%)"
					},
					to: {
						transform: "translateX(0%)"
					},
				},
			},
			animation: {
				slide: "slide ease-in-out 0.5s",
			}
		},
	},
	plugins: [
		plugin(function({ addUtilities }) {
			addUtilities({
				".text-shadow": {
					textShadow: "1.5px 1.5px rgba(0, 0, 0, 0.4)",
				},
				".sm-text-shadow": {
					textShadow: "0.8px 0.8px rgba(0, 0, 0, 0.4)",
				}
			})
		}),
		plugin(function({ addComponents, theme }) {
			addComponents({
				".button": {
					backgroundColor: theme("colors.light"),
					color: theme("colors.dark"),
					padding: "0.5rem 0.5rem",
					display: "block",
					fontWeight: "600",
					transition: "0.3s ease-in-out all",
					border: `1px solid ${theme("colors.dark")}`,
					borderRadius: "0.375rem",
					outline: "none",
		
					"&:hover": {
						backgroundColor: theme("colors.dark"),
						color: theme("colors.light"),
						boxShadow: "2px 2px 10px 0px #212121"
					},

					"&:focus": {
						backgroundColor: theme("colors.gray")
					}
				},
			})
		}),
	],
}

