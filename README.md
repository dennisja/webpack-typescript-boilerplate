# Typescript Webpack Boilerplate

A webpack 5 boilerplate for Typescript using babel

## Usage

### Installation

### Production build

## Tools used

- Webpack
- Babel
- Typescript

## Features supported

- Loading scss and css files
- Loading images, SVGs and fonts
- Loading js, jsx, ts, tsx, and json source code files
- Reading scoped/prefixed environment variables. Can be from .env files or all environment variables.

> If you want to scope your environment variables. You will have to provide the prefix through the scope variable to the getEnvironmentVariables function call [here](config/webpack.common.ts#L85)

## Dependencies

### General

- [webpack](https://github.com/webpack/webpack) - Module and asset bundler
- [webpack-cli]() -
- [webpack-merge](https://github.com/survivejs/webpack-merge) - merge webpack configurations
- [@types/webpack-dev-server](https://www.npmjs.com/package/@types/webpack-dev-server) - to add the devServer types to webpack

### Webpack loaders

- [source-map-loader](https://webpack.js.org/loaders/source-map-loader/) - Extracts sourcemaps from existing source files
- [babel-loader](https://webpack.js.org/loaders/babel-loader/) - For transpiling JavaScript and Typescript using Babel and webpack
- [style-loader](https://webpack.js.org/loaders/style-loader/) - To inject css in the DOM
- [css-loader](https://webpack.js.org/loaders/css-loader/) - Translate CSS to common JS
- [sass-loader](https://webpack.js.org/loaders/sass-loader/)- Compile SCSS to CSS

### Webpack plugins

- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) - Generate the html file from the template

- [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/) - Copy files to build folder

- [ForkTsCheckerWebpackPlugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) - Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)

- [DotenvWebpack](https://github.com/mrsteele/dotenv-webpack) - Load dotenv and other environment variables

- [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) - Replace variables in your code with other values or expressions at compile time

### Linting and Formatting

### Testing

## Author

- [Dennis Jjagwe](https://twitter.com/dennisjjagwe)
