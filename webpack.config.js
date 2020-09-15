const path = require("path");
// подключаем path к конфигу вебпак
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";
// создаем переменную для development-сборки

module.exports = {
  entry: {
    main: "./src/index.js",
    about: "./src/about.js",
    analytics: "./src/analytics.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        // тут описываются правила
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
        exclude: /node_modules/, // исключает папку node_modules
      },
      // Добавьте ещё одно правило:
      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "../",
                },
              },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
        ],
      },
      // пример настройки плагина image-webpack-loader
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          "file-loader?name=./images/[name].[ext]", // указали папку, куда складывать изображения
          {
            loader: "image-webpack-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=./vendor/[name].[ext]",
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[contenthash].css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      // Означает, что:
      inject: false, // стили НЕ нужно прописывать внутри тегов
      chunks: ["main"],
      template: "./src/index.html", // откуда брать образец для сравнения с текущим видом проекта
      filename: "index.html", // имя выходного файла, то есть того, что окажется в папке dist после сборки
    }),
    new HtmlWebpackPlugin({
      // Означает, что:
      inject: false, // стили НЕ нужно прописывать внутри тегов
      chunks: ["about"],
      template: "./src/about.html", // откуда брать образец для сравнения с текущим видом проекта
      filename: "about.html", // имя выходного файла, то есть того, что окажется в папке dist после сборки
    }),
    new HtmlWebpackPlugin({
      // Означает, что:
      inject: false, // стили НЕ нужно прописывать внутри тегов
      chunks: ["analytics"],
      template: "./src/analytics.html", // откуда брать образец для сравнения с текущим видом проекта
      filename: "analytics.html", // имя выходного файла, то есть того, что окажется в папке dist после сборки
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
//entry указали первое место куда заглянет webpack — файл index.js в папке src
//output указали в какой файл будет собирться весь js и дали ему имя
//path переписали точку выхода, используя утилиту path
