const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'                
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Es el numero limite hasta el que va a multiplicar'                
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en lista'   
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw'La base necesita ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;