'use strict';

var webpack = require('webpack'),
    path = require('path');

module.exports = {
  cache: true,
  debug: true,
  entry: {
    app: './src/app/app.js'
  },
  output: {
    path: path.join(__dirname, 'bundle'),
    publicPath: 'bundle/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, loader: 'babel' },
      { test: /\.html$/, loader: "underscore-template-loader" }
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      _: 'underscore',
      Backbone: 'backbone',
    })
  ]
};