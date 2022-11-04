const { createFile } = require('./helpers/multiply')
const argv = require('./config/yargs');

require('colors');

console.clear();

createFile(argv.b, argv.l, argv.h)
    .then( fileSuccess => console.log(fileSuccess.rainbow, 'el archivo se creo correctamente'))
    .catch( err => console.log(err, 'El archivo no pudo crearse'))
