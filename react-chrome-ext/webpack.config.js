const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { camelCase } = require("lodash");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");

const UIElementsDir = path.join(__dirname, "src", "UIElements");
const setUIElementHtml = () => {
  const htmlPages = [];
  const UIElements = getFolders("UIElements");
  UIElements.forEach((folderName) => {
    htmlPages.push(
      new HtmlWebpackPlugin({
        filename: `../${camelCase(folderName)}.html`,
        template: path.join(UIElementsDir, folderName, "index.html"),
        chunks: [camelCase(folderName)],
      })
    );
  });
  return htmlPages;
};

const ifDirExists = (SrcPath, value) => {
  return fs.existsSync(path.join(__dirname, "src", SrcPath))
    ? value
    : undefined;
};

const getFolders = (dirPath) => {
  return fs
    .readdirSync(path.join(__dirname, "src", dirPath), {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const getEntries = (dirPath, entryFile = "index.tsx") => {
  const _e = {};
  // get all folders
  const folders = getFolders(dirPath);

  folders.forEach((folderName) => {
    _e[camelCase(folderName)] = path.join(
      __dirname,
      "src",
      dirPath,
      folderName,
      entryFile
    );
  });

  return _e;
};

module.exports = {
  // entry: {
  //   index: "./src/index.tsx",
  // },
  entry: removeEmpty({
    index: "./src/index.tsx",
    popup: ifDirExists("popup", path.join(__dirname, "src/popup/index.tsx")),
    options: ifDirExists("options", "./src/options/index.tsx"),
    onboarding: ifDirExists("onboarding", "./src/onboarding/index.tsx"),
    newtab: ifDirExists("newtab", "./src/newtab/index.tsx"),
    serviceworker: ifDirExists("serviceworker/index.ts", {
      import: "./src/serviceworker/index.ts",
      filename: "serviceworker.js",
    }),
    ...getEntries("UIElements"),
    // ...getEntries("scripts", "index.ts"),
  }),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        exclude: /node_modules/,
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    ifDirExists(
      "popup",
      new HtmlWebpackPlugin({
        filename: "popup.html",
        template: "src/popup/index.html",
        chunks: ["popup"],
      })
    ),
    ifDirExists(
      "options",
      new HtmlWebpackPlugin({
        filename: "options.html",
        template: "src/options/index.html",
        chunks: ["options"],
      })
    ),
    ifDirExists(
      "newtab",
      new HtmlWebpackPlugin({
        filename: "newtab.html",
        template: "src/newtab/index.html",
        chunks: ["newtab"],
      })
    ),
    ifDirExists(
      "onboarding",
      new HtmlWebpackPlugin({
        filename: "onboarding.html",
        template: "src/onboarding/index.html",
        chunks: ["onboarding"],
      })
    ),
    ...setUIElementHtml(),
    new CopyPlugin({
      patterns: [
        { from: "manifest.json", to: "../manifest.json" },
        {
          from: "public/images",
          to: "../images",
        },
      ],
    }),
    ...getHtmlPlugins(["index"]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HTMLPlugin({
        title: "Application 0.009",
        filename: `../${chunk}.html`,
        chunks: [chunk],
      })
  );
}
