const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const path = require("path");
const modeConfiguration = env => require(`./webpack.${env}.config`)(env);

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);
  return webpackMerge({
    entry: './src/index.js',
    output: {
      publicPath: '/recipes',
      path: path.resolve(__dirname, '../public'),
      filename: 'bundled.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
            use: [
              'file-loader'
            ]
        },
        {
          test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      htmlPlugin,
    ]
  },
  modeConfiguration(mode)
  );
}