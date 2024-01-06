/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'xsm': {'max':'445px'},
    }
  },
};
export const plugins = [('@tailwindcss/aspect-ratio'),('@tailwindcss/forms'),];


