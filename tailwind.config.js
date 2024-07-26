/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3e5df9',
        'primary-focus': '#354ed0',
        'primary-content': '#ffffff',

        'secondary': '#9937cd',
        'secondary-focus': '#852ba6',
        'secondary-content': '#ffffff',

        'accent': '#cd37b9',
        'accent-focus': '#9d2a8e',
        'accent-content': '#ffffff',

        'neutral': '#2a2e37',
        'neutral-focus': '#16181d',
        'neutral-content': '#ffffff',

        'base-100': '#31363f',
        'base-200': '#2a2e37',
        'base-300': '#16181d',
        'base-content': '#ebecf0',

        'info': '#66c7ff',
        'success': '#87cf3a',
        'warning': '#e1d460',
        'error': '#ff6b6b',

        '--rounded-box': '1rem',
        '--rounded-btn': '.5rem',
        '--rounded-badge': '1.9rem',

        '--animation-btn': '.25s',
        '--animation-input': '.2s',

        '--btn-text-case': 'uppercase',
        '--navbar-padding': '.5rem',
        '--border-btn': '1px'
      }
    }
  },
  plugins: []
}
