/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat"],
				robotoSlab: ["Roboto Slab"],
			},
			animation: {
				marquee: "marquee 25s linear infinite",
				marquee2: "marquee2 25s linear infinite",
				slideIn: "slideIn .25s ease-in-out forwards var(--delay, 0)",
				rotateLogo: "rotateLogo 5s linear infinite",
				fadeIn: "fadeIn .5s ease-in forwards",
				fadeOut: "fadeOut .5s ease-out forwards",
				navBarDown: "navBarDown .5s ease-in-out forwards",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
				slideIn: {
					"0%": { opacity: 0, transform: "-translateX(100%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				rotateLogo: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotateY(360deg)" },
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				navBarDown: {
					"0%": {
						transform: "translateY(-100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: 1,
					},
				},
			},
		},
	},
	plugins: [],
};
