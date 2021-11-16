# Typescript Webpack Boilerplate

A webpack 5 boilerplate for Typescript using babel

## Usage

### Clone the repository

```bash
git clone git@github.com:dennisja/webpack-typescript-boilerplate.git
```

### Install dependencies

- With yarn:-

```bash
yarn
```

- With npm:-

```bash
npm i
```

### Running the project

- With yarn:-

```bash
yarn start
```

- With npm:-

```bash
npm start
```

### Build for production

- With yarn:-

```bash
yarn build
```

- With npm:-

```bash
npm run build
```

## Tools used

- [Webpack](https://webpack.js.org/) - code and asset bundling
- [Babel](https://babeljs.io/) - Transpiling Typescript and JavaScript
- [Typescript](https://www.typescriptlang.org/) - Type information
- [Yarn](https://classic.yarnpkg.com/lang/en/) - Package manager

## Features supported

- [x] Loading scss and css files
- [x] Loading images, SVGs and fonts
- [x] Loading js, jsx, ts, tsx, and json source code files
- [x] Reading scoped/prefixed environment variables. Can be from .env files or all environment variables.
- [ ] Using absolute imports
- [ ] Linting
- [ ] Code formatting

> If you want to scope your environment variables. You will have to provide the prefix through the scope variable to the getEnvironmentVariables function call [here](config/webpack.common.ts#L85)

## Dependencies

### Webpack

- [webpack](https://github.com/webpack/webpack) - Module and asset bundler
- [webpack-cli](https://github.com/webpack/webpack-cli) - The official cli for webpack
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - For faster development with webpack
- [webpack-merge](https://github.com/survivejs/webpack-merge) - Merge webpack configurations
- [@types/webpack-dev-server](https://www.npmjs.com/package/@types/webpack-dev-server) - To add the devServer types to webpack
- [cross-env](https://github.com/kentcdodds/cross-env) - Running commands across multiple platforms

### Webpack loaders

- [source-map-loader](https://webpack.js.org/loaders/source-map-loader/) - Extracts sourcemaps from existing source files
- [babel-loader](https://webpack.js.org/loaders/babel-loader/) - For transpiling JavaScript and Typescript using Babel and webpack
- [style-loader](https://webpack.js.org/loaders/style-loader/) - To inject css in the DOM
- [css-loader](https://webpack.js.org/loaders/css-loader/) - Translate CSS to common JS
- [sass-loader](https://webpack.js.org/loaders/sass-loader/)- Compile SCSS to CSS

### Webpack plugins

- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) - Generate the html file from the template

- [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/) - Copy individual files or entire directories, which already exist, to the build directory.

- [ForkTsCheckerWebpackPlugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) - Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)

- [DotenvWebpack](https://github.com/mrsteele/dotenv-webpack) - Load dotenv and other environment variables

- [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) - Replace variables in your code with other values or expressions at compile time

- [CSSMinimizerPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - minimize and optimize css

### Babel

- [@babel/core](https://babel.dev/docs/en/babel-core) - Transpile modern JavaScript into backwards compatible JavaScript
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) - Enables use of latest JavaScript features
- [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) - Enables babel understand typescript
- [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) - React defaults and plugins
- [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros) - Enables the use of compile-time code transformation
- [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties#docsNav) - Enable the use of class properties
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav) - Enables the re-use of Babel's injected helper code to save on codesize.

### Linting and Formatting

- [eslint](https://eslint.org/docs/user-guide/getting-started) - To enforce a style guide in the application
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Base react rules
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) - Base typescript rules
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) - Parser to allows eslint lint Typescript code
