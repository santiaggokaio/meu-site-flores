const postcssImport  = require('postcss-import');
const tailwindcss    = require('tailwindcss');
const autoprefixer   = require('autoprefixer');

/** @type {import('postcss').ProcessOptions} */
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {}
  }
};