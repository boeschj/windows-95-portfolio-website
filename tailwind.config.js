const plugin = require('tailwindcss/plugin');
const win95Colors = require('./win95Colors.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'MS-Sans-Serif': ['MS Sans Serif'],
        },
        extend: {
            colors: win95Colors.colors,
            screens: {
                xs: '380px',
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents, theme }) {
            const gradientBorders = {
                '.win95-border-raised': {
                    padding: '4px',
                    boxShadow: `
                        inset -1px -1px ${theme('colors.raised.b-4')},
                        inset -2px -2px ${theme('colors.raised.b-3')},
                        inset -3px -3px ${theme('colors.raised.b-2')},
                        inset -4px -4px ${theme('colors.raised.b-1')},

                        inset 1px 1px ${theme('colors.raised.t-1')},
                        inset 2px 2px ${theme('colors.raised.t-2')},
                        inset 3px 3px ${theme('colors.raised.t-3')},
                        inset 4px 4px ${theme('colors.raised.t-4')}
                    `,
                },
                '.win95-border-raised-light': {
                    padding: '4px',
                    boxShadow: `
                        inset -1px -1px ${theme('colors.raised-light.b-3')},
                        inset -2px -2px ${theme('colors.raised-light.b-2')},
                        inset -3px -3px ${theme('colors.raised-light.b-1')},

                        inset 1px 1px ${theme('colors.raised-light.t-1')},
                        inset 2px 2px ${theme('colors.raised-light.t-2')},
                        inset 3px 3px ${theme('colors.raised-light.t-3')}
                    `,
                },
                '.win95-border-sunken': {
                    padding: '4px',
                    boxShadow: `
                        inset -1px -1px ${theme('colors.sunken.t-1')},
                        inset -2px -2px ${theme('colors.sunken.t-2')},
                        inset -3px -3px ${theme('colors.sunken.t-3')},
                        inset -4px -4px ${theme('colors.sunken.t-4')},

                        inset 1px 1px ${theme('colors.sunken.b-1')},
                        inset 2px 2px ${theme('colors.sunken.b-2')},
                        inset 3px 3px ${theme('colors.sunken.b-3')},
                        inset 4px 4px ${theme('colors.sunken.b-4')}
                        `,
                },
                '.win95-border-sunken-light': {
                    boxShadow: `
                        inset -1px -1px ${theme('colors.sunken-light.b-1')},
                        inset -2px -2px ${theme('colors.sunken-light.b-2')},

                        inset 1px 1px ${theme('colors.sunken-light.t-1')},
                        inset 2px 2px ${theme('colors.sunken-light.t-2')}
                    `,
                },
                '.win95-border-tab': {
                    padding: '4px 8px 2px',
                    boxShadow: `
                        inset -1px 0 ${theme('colors.tab.b-3')},
                        inset -2px 0 ${theme('colors.tab.b-2')},
                        inset -3px 0 ${theme('colors.tab.b-1')},

                        inset 1px 1px ${theme('colors.tab.t-1')},
                        inset 2px 2px ${theme('colors.tab.t-2')},
                        inset 3px 3px ${theme('colors.tab.t-3')}
                    `,
                },
                '.win95-border-top': {
                    padding: '4px',
                    boxShadow: `
                        inset 0 1px ${theme('colors.top.t-1')},
                        inset 0 2px ${theme('colors.top.t-2')},
                        inset 0 3px ${theme('colors.top.t-3')},
                        inset 0 4px ${theme('colors.top.t-4')}
                    `,
                },
            };

            addComponents(gradientBorders);
        }),
    ],
};
