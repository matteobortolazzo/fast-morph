const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass()
  ],
  collections: [
    { name: '@matteobortolazzo/fast-morph' }
  ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
