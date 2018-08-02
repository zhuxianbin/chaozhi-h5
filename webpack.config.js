const resolve = require("path").resolve;
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const url = require("url");
const publicPath = "";

module.exports = (options = {}) => ({
  entry: {
    vendor: "./src/vendor",
    index: "./src/main.js"
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: options.dev ? "[name].js" : "[name].js?[chunkhash]",
    chunkFilename: "[id].js?[chunkhash]",
    publicPath: options.dev ? "/assets/" : publicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve(__dirname,'src'),
        '~': resolve(__dirname,'static'),
        'jquery': 'jquery',
        '$': 'jquery'
    }
},
  devServer: {
    host: "0.0.0.0",
    port: 8008,
    compress: true,
    open:true,
    disableHostCheck: true,
    // proxy: {
    //   '/api/': {
    //     target: 'http://127.0.0.1:8080',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    historyApiFallback: {
      index: url.parse(options.dev ? "/assets/" : publicPath).pathname
    }
  },
  devtool: options.dev ? "#eval-source-map" : "#source-map"
});
