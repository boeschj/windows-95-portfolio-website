const plugin = require('tailwindcss/plugin');
const win95Colors = require('./win95Colors.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'MS-Sans-Serif': ['MS Sans Serif'],
        },
        container: {
            center: true,
        },
        extend: {
            colors: {
                ...win95Colors.colors,
                'windows-gray': '#c0c0c0',
                'border-light': '#ffffff',
                'border-dark': '#808080',
                'border-darker': '#000000',
            },
            screens: {
                xs: '380px',
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents, theme }) {
            const gradientBorders = {
                '.w95-border-raised': {
                    padding: '4px',
                    boxShadow: `
         inset -1px -1px ${theme('colors.modal-b-4')},
         inset -2px -2px ${theme('colors.modal-b-3')},
         inset -3px -3px ${theme('colors.modal-b-2')},
         inset -4px -4px ${theme('colors.modal-b-1')},


            inset 1px 1px ${theme('colors.modal-t-1')},
            inset 2px 2px ${theme('colors.modal-t-2')},
            inset 3px 3px ${theme('colors.modal-t-3')},
            inset 4px 4px ${theme('colors.modal-t-4')}
          `,
                },
                '.w95-border-raised-light': {
                    padding: '4px',
                    boxShadow: `
         inset -1px -1px ${theme('colors.modal-b-3')},
         inset -2px -2px ${theme('colors.modal-b-2')},
         inset -3px -3px ${theme('colors.modal-b-1')},


            inset 1px 1px ${theme('colors.modal-t-1')},
            inset 2px 2px ${theme('colors.modal-t-2')},
            inset 3px 3px ${theme('colors.modal-t-3')}
          `,
                },
                '.w95-border-sunken': {
                    padding: '4px',
                    boxShadow: `
            inset 1px 1px ${theme('colors.modal-b-1')},
         inset 2px 2px ${theme('colors.modal-b-2')},
         inset 3px 3px ${theme('colors.modal-b-3')},
         inset 4px 4px ${theme('colors.modal-b-4')},


            inset -1px -1px ${theme('colors.modal-t-1')},
            inset -2px -2px ${theme('colors.modal-t-2')},
            inset -3px -3px ${theme('colors.modal-t-3')},
            inset -4px -4px ${theme('colors.modal-t-4')}
          `,
                },
                '.w95-textarea': {
                    '@apply w95-border-sunken': {},
                },
                '.w95-modal': {
                    '@apply w95-border-raised': {},
                },
                '.w95-tab': {
                    padding: '4px 8px 2px',
                    boxShadow: `
         inset -1px 0 ${theme('colors.modal-b-3')},
         inset -2px 0 ${theme('colors.modal-b-2')},
         inset -3px 0 ${theme('colors.modal-b-1')},


            inset 1px 1px ${theme('colors.modal-t-1')},
            inset 2px 2px ${theme('colors.modal-t-2')},
            inset 3px 3px ${theme('colors.modal-t-3')}
          `,
                },
                '.w95-button': {
                    boxShadow: `
            inset -1px -1px ${theme('colors.menu-btn-b-1')},
            inset 1px 1px ${theme('colors.menu-btn-t-1')},
            inset -2px -2px ${theme('colors.menu-btn-b-2')},
            inset 2px 2px ${theme('colors.menu-btn-t-2')}
          `,
                    '&:active': {
                        '@apply w95-border-sunken': {},
                    },
                },
                '.w95-button-clicked': {
                    boxShadow: `
            inset -1px -1px ${theme('colors.pressed-b-1')},
            inset 1px 1px ${theme('colors.pressed-t-1')},
            inset -2px -2px ${theme('colors.windows-gray')},
            inset 2px 2px ${theme('colors.pressed-t-2')}
          `,
                },
                '.w95-footer': {
                    padding: '4px',
                    boxShadow: `
            inset 0 1px ${theme('colors.footer-t-1')},
            inset 0 2px ${theme('colors.footer-t-2')},
            inset 0 3px ${theme('colors.footer-t-3')},
            inset 0 4px ${theme('colors.footer-t-4')}
          `,
                },
                '.w95-time': {
                    boxShadow: `
            inset -1px -1px ${theme('colors.time-b-1')},
            inset 1px 1px ${theme('colors.time-t-1')},
            inset -2px -2px ${theme('colors.time-b-2')},
            inset 2px 2px ${theme('colors.time-t-2')}
          `,
                },
            };

            addComponents(gradientBorders);
        }),
    ],
};
