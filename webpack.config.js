var webpack = require('webpack') //
var nodeModulesPath = './node_modules'

// uglify js source turn variable names to variables like: a, b, c
// and makes debugging hard even with source map since variable names that the
// browser debugger sees are different eg:  _store is h
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')

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
    app: './frontend/todo.jsx',
    vendor: ['react',
             'lodash',
             'node-uuid',
             'react-dom',
             'react-redux',
             'react-router',
             'redux',
            ]
  },
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  module: MODULE,
  plugins: [
    providePlugin,
    commonsPlugin
  ]
}

if (TARGET === 'start' || !TARGET) {
  config.devtool = 'source-map'
  module.exports = config
} else if (TARGET === 'build') {
  config.plugins.push(uglifyPlugin)
  module.exports = config
}
