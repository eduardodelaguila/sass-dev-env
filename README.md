# sass-dev-env

Fast development environment for SASS (\*.scss) including sourcemaps and autoprefixer

## Usage

This SASS development environment is pretty straight forward, there are two ways of using it, _dev_ mode or _production_ mode.

### Dev mode

In this mode all outputted css is in blocks,prefixed and will preserve all comments. This mode keeps listening to changes and write it in the new css file located at ```/dev/css```

To run this mode you should use ```npm run dev```.

### Production mode

This mode will help you to build your production css file, this file will be minified, prefixed and will remove all unused rules and comments. The css build will be located at ```/dist/css```.

To preserve important comments you should use ```/* ! */```.

To run this mode you should use ```npm run build```.

## Empty src folder

If you try to run ```npm run dev``` or ```npm run build``` with ```/src/scss/```folder empty, scripts will throw an error, don't worry, when you add a file into ```scss```folder the error will be gone.


## Thanks

This little project was possible using hellobrian's sass-recipe located at <https://github.com/hellobrian/sass-recipes/tree/master/node-sass> you are the real MVP.