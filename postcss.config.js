const styleLint = require('stylelint');

const postcssCssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');
const postcssBrowserReporter = require('postcss-browser-reporter');

module.exports = config => [
  styleLint(),
  postcssCssnext({
    browsers: 'last 2 versions',
    features: {
      customProperties: {
        variables: {
          maxWidth: '60rem',
          colorPrimaryDark: '#107491',
          colorPrimary: '#007acc',
          colorSecondaryDark: '#22846C',
          colorSecondary: '#46BE77',
          colorNeutralDark: '#111',
          colorNeutral: '#8C8D91',
          colorNeutralLight: '#FBFCFC',
          colorText: '#555',
        },
      },
    },
  }),
  postcssReporter(),
  ...!config.production ? [
    postcssBrowserReporter(),
  ] : [],
];
