/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins',  'sans-serif'],
      },
      backgroundImage: {
        'main-bg': "url('/Main.png')",
      },
      colors: {
        'features':"#363636",
        'primary': '#424242',
        'back':'#373737',
        'custom-orange': '#FF4001',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
