// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const swcConfig = require('./.swcrc.json');

const targets = {
  chrome: '67.0.0',
  edge: '91.0.0',
  firefox: '78.0.0',
  ios: '10.3.0',
  opera: '64.0.0',
  safari: '10.1.0',
  samsung: '11.1.0'
};

const useSWC = false;

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          debug: true,
          targets,
        },
      ],
    ],
    compact: true,
  },
};

const swcLoader = {
  loader: 'swc-loader',
  options: {
    ...swcConfig,
    env: {
      debug: true,
      dynamicImport: true,
      targets,
    }
  },
};

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `[name].bundle.js`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        use: [ useSWC ? swcLoader : babelLoader ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
