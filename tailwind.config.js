/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{html,js,jsx}'
  ],
	safelist: [
		{
			pattern: /grid-cols-.+/,
			variants: ['sm', 'md', 'lg']
		},
		{
			pattern: /col-span-.+/,
			variants: ['sm', 'md', 'lg']
		}
	],
  theme: {
    extend: {
      
      	// Colors
		colors: {
			
			// Dark
			dark: {
				1: '#060505',
				2: "#6F6F6F"
			},

			// Light
			light: {
				1: '#FAFAFA',
				2: '#FFFFFF'
			},

			// Accent
			accent:  '#2767FE',
		},

		// Fonts
		fontFamily: {
			sans: ["var(--font-sans)"],
			inter: ["var(--font-inter)"],
		},

		keyframes: {

			"fade-in": {

				"0%": { opacity: "0" },
				"100%": { opacity: "1" }

			}

		},

		animation: {

			"fade-in": "fade-in 0.3s ease-in",
			'slide-down': {
				'0%': {
					'height': 0
				},
				'100%': {
					'height': 500
				}
			},
			'slide-up': {
				'0%': {
					'height': 500
				},
				'100%': {
					'height': 0
				}
			},
		}

    }

  },
  plugins: [
	require('@tailwindcss/typography'),
  ],
}
