var webpack = require('webpack')
var nodeModulesPath = './node_modules'

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
//var extractPlugin = new ExtractTextPlugin('../css/app.css')
//var vendorExtractPlugin = new ExtractTextPlugin('../css/vendor.css')

// uglify js source turn variable names to variables like: a, b, c
// and makes debugging hard even with source map since variable names that the
// browser debugger sees are different eg:  _store is h
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })

// Makes $, jQuery, React available project wide, without require
// basically does a "React = require('react')" globally, but still not make React available outside of the project
var providePlugin = new webpack.ProvidePlugin({
  React: 'react'
})

var TARGET = process.env.npm_lifecycle_event;

var MODULE = {
  loaders: [
    // { test: /\.jsx$/, loader: 'jsx-loader', exclude: [nodeModulesPath] },
    {test: /\.jsx?$/, loader: 'babel-loader', exclude: [nodeModulesPath]},
    {test: /\.tsx?$/, loader: 'ts-loader', exclude: [nodeModulesPath]},
    // Just example for native css { test: /\.css/, loader: 'style!css', exclude: [nodeModulesPath] },
    //{test: /web\/static\/css\/app\.scss/,
    // loader: extractPlugin.extract('css?sourceMap!' + 'sass?sourceMap'),
    // exclude: [nodeModulesPath]
    //},
    // Not in use yet foundation and foundation icons downloaded from cdnjs by app cache but over http not http
    //{test: /web\/static\/css\/vendor\.scss/,
    // loader: vendorExtractPlugin.extract('css?sourceMap!' + 'sass?sourceMap'),
    // exclude: [nodeModulesPath]
    //},
  ],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}

//console.log(TARGET)
config = {
  entry: {
    app: './frontend/app.tsx'
  //  vendor: ['./frontend/vendor.css.js']
  },
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  module: MODULE,
  plugins: [
    commonsPlugin,
//    extractPlugin,
  //  vendorExtractPlugin,
    providePlugin
  ]
}

if (TARGET === 'start' || !TARGET) {
  config.devtool = 'source-map'
  module.exports = config
} else if (TARGET === 'build') {
  config.plugins.push(uglifyPlugin)
  module.exports = config
}
