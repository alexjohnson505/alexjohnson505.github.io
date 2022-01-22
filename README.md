# alexjohnson.io (2017)

This project has been deprecated. Please see https://github.com/alexjohnson505/alexjohnson.io for future updates.

Jekyll-Powered Static Site. [alexjohnson.io](http://alexjohnson.io). Hosted on GitHub Pages.

Checkout my [GitHub](https://github.com/alexjohnson505)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisities

Development tools that you will need installed on your local computer:

* [Ruby](...)
* [Bundler](...)
* [Node Package Manager (npm)](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
* [Grunt](...)
* [Bower](http://bower.io/)

### Installing

```sh
# Install Node dependencies
$ npm install
```

```sh
# Install Front-end dependencies
$ bower install
```

```sh
# Install Ruby dependencies
$ bundle install
````

### Running Web Server

Once you have installed local dependencies, start a local web server with:

``` sh
$ grunt serve
```

Your local web server should now be running at ``localhost:3000``

### BrowserSync

For front-end development, this project supports BrowserSync. 

* Install the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) Chrome Browser Plugin
* Enable LiveReload. *LiveReload has been enabled when you see a solid black dot in the plugin's icon*
* Changes should now be updated to your chrome window. LESS/CSS changes will be injected.

### Image Specs

> .... because I will forget

- Thumbnails: 280x280 (???)
- Post Headers: 960 x 720
- Preview 4:3 images: 875 x [whatever]

### Production

```sh
$ grunt build
```
Site will be generated. Current deploy process involved copying the generated static site into the master branch for access by GitHub pages. My goal is to eventually have a script that automatically configures the Jekyll build for GitHub Pages.

### Built With

* [Bootstrap](http://getbootstrap.com/)
* [Jekyll](...)
* [Yeoman](https://github.com/robwierzbowski/generator-jekyllrb)

### Contributors

* Alex Johnson -[@alexjohnson505](https://github.com/alexjohnson505)
