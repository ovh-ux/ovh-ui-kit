const autoprefixer = require('autoprefixer');
const formatter = require('eslint-friendly-formatter');
const webpack = require('webpack');

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemcalcPlugin = require('less-plugin-remcalc');

const exclude = [/node_modules(?![/\\](@ovh))/, /dist/];

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': process.env.NODE_ENV,
    }),
    new LodashModuleReplacementPlugin({
      shorthands: true,
      paths: true,
    }),
    new MiniCssExtractPlugin({
      filename: '../css/oui.css',
      allChunks: true,
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [
          { loader: 'eslint-loader', options: { formatter } },
        ],
        exclude,
      }, {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { useBuiltIns: 'usage' },
                ],
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
                'babel-plugin-angularjs-annotate',
                'babel-plugin-lodash',
              ],
              comments: false,
              env: {
                test: {
                  plugins: [
                    ['babel-plugin-istanbul', {
                      exclude: [
                        '**/*-utils.js',
                        '**/*.spec.js',
                      ],
                    }],
                  ],
                },
              },
            },
          },
        ],
        exclude,
      }, {
        test: /\.(html|svg)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
              minimize: true,
            },
          },
        ],
        exclude,
      }, {
        test: /\.css|.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                autoprefixer({ browsers: ['last 2 versions', 'ie 11'] }),
              ],
            },
          },
          {
            loader: 'less-loader',
            options: {
              plugins: [RemcalcPlugin],
              sourceMap: true,
            },
          },
        ],
        exclude,
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?|.(woff(2)?|ttf|eot|svg)(\?[a-f0-9]{32})?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[folder]/[name].[ext]?[hash]',
              outputPath: '../fonts',
              publicPath: '../fonts',
            },
          },
        ],
      },
    ],
  },
};
