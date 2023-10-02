const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[name][ext]"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/favicon.png"),
          to: path.resolve(__dirname, "dist")
        }
      ]
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]"
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      },
      {
        test: /\.[tj]sx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
