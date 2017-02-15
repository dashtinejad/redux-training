# Setting up the Project

First you'll need [Node.js](https://nodejs.org) (Current LTS Version) and the package manager
that comes with it: [npm](https://www.npmjs.com/). For speed up, we'll use
[Yarn](https://yarnpkg.com/) as the package manager. So please install it.

## Initialize `package.json`

Initialize the `package.json` file:

```
yarn init -y
```

## Installing webpack

Install `webpack` and other dependencies:

```
yarn add --dev webpack
yarn add --dev webpack-dev-server
yarn add --dev babel-loader
yarn add --dev babel-core
yarn add --dev babel-preset-es2015
yarn add --dev babel-preset-react
```

## Node Scripts

Add the following script to your `package.json`

```
  "scripts": {
    "start": "webpack-dev-server --inline --content-base ."
  }
```

## webpack Configuration

Create your webpack configuration file `webpack.config.js`

```
module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "es2015",
            "react"
          ]
        }
      }
    ]
  }
}
```

## Create `index.js`

Now create your `index.js` file which is your starting app js file:

```
const NAME = '<h1>Hello JavaScript</h1>'
document.body.innerHTML = NAME
```


## Create `index.html`

```
<!doctype html>
<html>
  <head>
    <meta charset=utf-8/>
    <title>My First Redux App</title>
  </head>

  <body>
    <div id=app></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

## Start your app

Now run your program:

```
yarn start
```

## Browse your site

```
http://localhost:8080/
```