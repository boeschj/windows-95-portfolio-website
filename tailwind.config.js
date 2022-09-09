const { truncate } = require('fs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "MS-Sans-Serif": ['MS Sans Serif'],
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        //main colors
        'windows-gray': '#c0c4c8',
        'windows-blue':'#0000a8',
        'windows-bg': '#55aaaa',
        'windows-white': '#fcfcfc',

        //footer menu button gradients
        'menu-btn-l-1': '#e5e7e8',
        'menu-btn-l-2': '#fcfcfc',
  
        'menu-btn-t-1': '#fcfcfc',
        'menu-btn-t-2': '#e5e7e8',

        'menu-btn-r-1': '#969a9e',
        'menu-btn-r-2': '#84888c',
        'menu-btn-r-3': '#000000',
        'menu-btn-r-4': '#787a7d',

        'menu-btn-b-1': '#c0c4c8',
        'menu-btn-b-2': '#84888c',
        'menu-btn-b-3': '#393b3d',
        'menu-btn-b-4': '#000000',

        //footer time gradients
        'time-l-1': '#a9adb1',
        'time-l-2': '#84888c',

        'time-t-1': '#84888c',
        'time-t-2': '#9a9ea2',

        'time-r-1': '#e1e3e5',
        'time-r-2': '#fcfcfc',

        'time-b-1': '#e1e3e5',
        'time-b-2': '#fcfcfc',
        

        //footer gradients
        'footer-t-1': '#d2d5d8',
        'footer-t-2': '#fcfcfc',
        'footer-t-3': '#c3c7cb',
        'footer-t-4': '#a5bdc0',


        //modal gradients
        'modal-t-1': '#c7cbce',
        'modal-t-2': '#fcfcfc',
        'modal-t-3': '#cfd2d5',
        'modal-t-4': '#b9c2c6',

        'modal-b-1': '#a9adb1',
        'modal-b-2': '#84888c',
        'modal-b-3': '#000000',
        'modal-b-4': '#1a3434',

        'modal-r-1': '#c0c4c8',
        'modal-r-2': '#84888c',
        'modal-r-3': '#525557',
        'modal-r-4': '#000000',

        'modal-l-1': '#c0c4c8',
        'modal-l-2': '#fcfcfc',
        'modal-l-3': '#e9eaeb',
        'modal-l-4': '#c0c4c8',

        //text area gradients
        'text-t-1': '#ececec',
        'text-t-2': '#000000',
        'text-t-3': '#5a5d60',
        'text-t-4': '#84888c',

        'text-b-1': '#d6d9db',
        'text-b-2': '#c0c4c8',
        'text-b-3': '#fcfcfc',
        'text-b-4': '#dadcde',

        'text-l-1': '#3f3f3f',
        'text-l-2': '#080808',
        'text-l-3': '#84888c',
        'text-l-4': '#adb1b5',

        'text-r-1': '#c0c4c8',
        'text-r-2': '#dadcde',
        'text-r-3': '#fcfcfc',
        'text-r-4': '#c0c4c8',


        //button pressed state
        'pressed-t-1': '#2d2e30',
        'pressed-t-2': '#000000',
        'pressed-t-3': '#000000',
        'pressed-t-4': '#5a5d60',
        'pressed-t-5': '#9ca0a4',

        'pressed-b-1': '#fcfcfc',
        
        'pressed-l-1': '#676a6d',
        'pressed-l-2': '#060606',

        'pressed-r-1': '#e7e8ea',
        'pressed-r-1': '#e5e7e8',
      },
    },
  },
  plugins: [],
}
