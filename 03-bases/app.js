const { createFile } = require('./helpers/multiply')
const argv = require('./config/yargs');

require('colors');

console.clear();

createFile(argv.b, argv.l)
    .then( fileSuccess => console.log(fileSuccess.rainbow, 'el archivo se creo correctamente'))
    .catch( err => console.log('El archivo no pudo crearse'))
