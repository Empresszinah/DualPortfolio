/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          sans: ['Inter'],
        },
          colors: {
            green: '#13A541',
            gray_dark: '#0E110F',
            gray: '#CFCFCF',
            gray_light: '#d3dce6',
          },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          "2xl": '1536px',
        },
        fontWeight: {
          normal: '400',
          medium: '500',
          bold: '700',
          semibold:'600',
          extrabold:'800'
    
        },
        spacing: {
          1: '8px',
          2: '12px',
          3: '16px',
          4: '24px',
          5: '32px',
          6: '48px',
        },
        borderRadius: {
          none: '0',
          sm: '0.125rem',
          DEFAULT: '0.25rem',
          DEFAULT: '4px',
          md: '0.375rem',
          lg: '0.5rem',
          full: '9999px',
          large: '12px',
        }
      },
  },
  plugins: [],
}

