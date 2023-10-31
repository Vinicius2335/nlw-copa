import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto), sans-serif'
      },
      backgroundImage: {
        app: 'url(/app-bg.png)'
      },
      colors: {
        ignite: {
          500: "#129E57",
        },

        nlwYellow: {
          500: "#F7DD43",
          700: "#E5CD3D"
        },

        nlwGray: {
          100: "#E1E1E6",
          600: "#323238",
          800: "#202024",
          900: "#121214"
        }
       
      },
    },
  },
  plugins: [],
}
export default config
