## webpack-express-simple

Simple Webpack config based on this post [The simplest Webpack and Express setup](https://alejandronapoles.com/2016/03/12/the-simplest-webpack-and-express-setup/)

###### Notes
- Amended "resolve extensions" to suit new Webpack config requirements
- Amended require("file?name=index.html!./index.html"); to require("file-loader?name=index.html!./index.html");