/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '768px',
      'desktop': '1024px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'title-color': '#D61518',
      },
      boxShadow: {
        'normal': '0 0 0 1px black',
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};
