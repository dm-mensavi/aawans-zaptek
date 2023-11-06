module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
	  container: {
		padding: {
		  DEFAULT: "15px",
		},
	  },
	  extend: {
		colors: {
		  primary: "#b68c5a",
		  primaryLight: "#f8f3e8",
		  primaryLighter: "#f9f7f3",
		  secondary: "#181818",
		  secondaryLight: "#565656",
		  white: "#ffffff",
		},
		fontFamily: {
		  sans: ["Assistant"],
		  serif: ["Playfair Display"],
		  mono: ["ui-monospace", "SFMono-Regular"],
		  display: ["Oswald"],
		  body: ['"Open Sans"'],
		  inter: ["Inter"],
		},
		boxShadow: {
		  'custom': '0 0 15px -3px rgb(0 0 0 / 0.1), 0 0px 6px -4px rgb(0 0 0 / 0.1);',
		},
	  },
	},
	plugins: [],
  };
  