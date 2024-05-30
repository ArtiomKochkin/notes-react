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
				light: "#F8F4FF",
				dark: "#2d283e",
				blue: "#802bb1"
			},
			fontFamily: {
				nunito: ["Nunito Sans", "sans-serif"],
			},
			transitionTimingFunction: {
				DEFAULT: "ease-in-out"
			},
			boxShadow: {
				custom: "3px 3px 15px 0px #802bb1"
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
					textShadow: "1.5px 1.5px rgba(128, 43, 177, 0.4)",
				},
				".sm-text-shadow": {
					textShadow: "0.8px 0.8px rgba(128, 43, 177, 0.4)",
				}
			})
		}),
		plugin(function({ addComponents, theme }) {
			addComponents({
				".button": {
					backgroundColor: "inherit",
					padding: "0.5rem 0.5rem",
					display: "block",
					fontWeight: "600",
					transition: "0.3s ease-in-out all",
					border: `1px solid ${theme("colors.blue")}`,
					borderRadius: "0.375rem",
					outline: "none",
		
					"&:hover": {
						backgroundColor: `${theme("colors.blue")}`,
						boxShadow: "2px 2px 10px 0px #802bb1"
					},

					"&:focus": {
						outline: `1px solid ${theme("colors.blue")}`
					},

					"&:disabled": {
						cursor: "not-allowed",
						opacity: "0.7",

						"&:hover": {
							backgroundColor: "inherit",
							color: "inherit",
							boxShadow: "none"
						},
					}
				},
			})
		}),
	],
}

