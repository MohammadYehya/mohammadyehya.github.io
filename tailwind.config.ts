import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			meteor: 'meteor 5s linear infinite',
			flip: 'flipping 5s linear infinite',
			fadein: 'fadein ease 1000ms',
			enter: 'enter ease 1000s'
  		},
  		keyframes: {
  			meteor: {
  				'0%': {
  					transform: 'rotate(315deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(315deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
			flipping:{
				'0%': {transform: 'rotateY(0deg)'},
				'50%': {transform: 'rotateY(90deg)'},
				'100%': { transform: 'rotateY(0deg)' },
			},
			fadein:{
				from:{
					opacity:'0'
				},
				to:{
					opacity:'1'
				}
			},
			enter:{
				from:{
					transform: 'translate(var(-100%))'
				},
				to:{
					transform: 'translate(var(0px))'
				}

			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
