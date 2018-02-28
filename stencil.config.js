const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass()
  ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
