/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blauw:           '#1a2e45',
        magenta:         '#C4006A',
        'magenta-licht': '#FCE8F3',
        'magenta-mid':   '#F9A8D4',
        grijs:           '#64748b',
        lijn:            '#ede8f0',
        'bg-alt':        '#FAFAF9',
      },
    },
  },
  plugins: [],
};
