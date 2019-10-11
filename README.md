# sass-dev-env

Fast development environment for SASS (\*.scss) including sourcemaps and autoprefixer

## Usage

This SASS development environment is pretty straight forward, there are two ways of using it, _dev_ mode or _production_ mode.

### Dev mode

In this mode all outputted css are in blocks,prefixed and will preserve all comments. This mode keeps listening to changes and write it in the new css file located at ```/dev/css```

To run this mode you should use ```npm run dev``` or ```yarn dev```.

### Production mode

This mode will help you to build your production css file, this file will be minified, prefixed and will remove all unused rules and comments. The css build will be located at ```/dist/css```.

To preserve important comments you should use ```/* ! */```.

To run this mode you should use ```npm run build``` or ```yarn build```.

## Empty src folder

A ```src``` and a ```scss``` folder will be created if it doesn't exist, inside ```scss``` folder will be created a ```style.scss``` file for you to start coding your styles 😌. 


## Thanks

This little project was possible using hellobrian's sass-recipe located at <https://github.com/hellobrian/sass-recipes/tree/master/node-sass> you are the real MVP.
