- create src folder
- create index.html and index.js files
- npm install -g webpack-dev-server webpack
- create webpack.config.js
- webpack.config.js
 var path = require("path");
module.exports = {
  context:path.resolve(__dirname,"src"),
  entry: { app:['./index.js'] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};

- to run webpack-dev-server --content-base dist/

- pre processing of dist and src
-npm install cpy-cli rimraf
-cpy cli for copying .html files from src to dist
-rimraf for cleaning dist directory

- package.json  in scripts add 
- "clean-dist":"rimraf dist"
- "copy-files":"cpy index.html index3.html  ../dist --cwd=src"
- add "prestart":"npm run clean-dist && npm run copy-files"
- add "start": "webpack-dev-server --content-base dist/"

- adding bable https://babeljs.io/docs/setup/#installation
- npm install --save-dev babel-cli babel-core babel-loader
- npm install babel-preset-env --save-dev
- echo {"presets":["env"]} > .babelrc

- eslint installs and setup http://eslint.org/
- it is help us watching code and gives us hint there itself
- npm install --save-dev-g eslint
- eslint --init

- adding react to project
- npm install --save react react-dom