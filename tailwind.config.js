/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#b882b3', 
      },
    },
  },
  plugins: [
    import("flowbite/plugin"),
    import('@tailwindcss/forms'),
  ],
}