const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    safelist: [
      'bg-red-500',
      'text-3xl',
      'lg:text-4xl',
      'underline',
      'underline-offet-8',
      'decoration-4',
      'text-gray-700'
    ],
  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      blur: {
        xs: "1px",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) {  }

        md: "960px",
        // => @media (min-width: 960px) {  }

        lg: "1440px",
        // => @media (min-width: 1440px) {  }
      },
      //fonts declaration 
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ],
        'serif': ['ui-serif', 'Georgia', ],
        'mono': ['ui-monospace', 'SFMono-Regular', ],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
});
