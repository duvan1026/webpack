# Webpack

Webpack nos ayuda a realizar la transformación o conversión de nuestro codigo al estandar que se requiere, evitando que tenga algun problema nuestro codigo con versiones anteriores de JavaScript.


## Setup Getting Start WEBPACK

* ejecutar en la consola de comandos el siguiente comando ```npm install webpack webpack-cli --save-dev``` instalando en su defecto webpack en nuestro aplicativo
* Agregar en el archivo **package.json** lo siguiente:
    ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
    },
    ```
    Con el ello podremos ejecutar  ```npm run build``` para así construir nuestro archivo comprimido.

## Babel

Nos permite transformar el codigo de un estandar alto del ECMAscript a un estandar que se requiera.

### Instalación

* se introduce el comando ```npm install --save-dev babel-loader @babel/core```
* se sigue paso a paso de la guia del siguiente [link](https://babeljs.io/docs/usage);