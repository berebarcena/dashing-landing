var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var isProduction = process.env.NODE_ENV === "production";

var babelPlugins = [];
var webpackPlugins = [
  new CopyWebpackPlugin([
    { from: './src/index.html', to: './index.html' },
    { from: './src/404.html', to: './404.html' },
    { from: './src/static', to: './static' }
  ]),
  new webpack.optimize.OccurrenceOrderPlugin(true),
];

if (isProduction) {
  // Production webpack plugins
  webpackPlugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
  webpackPlugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));

  // Production babel plugins
  babelPlugins.push(["transform-react-remove-prop-types", {
    "mode": "wrap",
    "ignoreFilenames": ["node_modules"]
  }]);
} else {
  webpackPlugins.push(
    new webpack.EnvironmentPlugin({ 'NODE_ENV': 'development' })
  );
}


var config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: isProduction ? '/landing' : '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { // All JS/React files
        test: /\.js$/,
        exclude: [/node-modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-1'],
            plugins: babelPlugins
          }
        }]
      },
      { // On Runtime ESLint
        enforce: "pre",
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        loader: "eslint-loader",
        options: {
          emitWarning: true,
        }
      },
      { // SCSS Compilation
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false }
          },
          'sass-loader'
        ]
      },
      { // JSON loader
        test: /\.json$/,
        loader: "json-loader"  //JSON loader
      },
      {// Fonts
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader'
      },
    ]
  },
  plugins: webpackPlugins,
  devtool: "eval-source-map", // Default development sourcemap
};

// Change sourcemap if production
if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}


module.exports = config;