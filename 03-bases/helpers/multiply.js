const fs = require('fs');
const colors = require('colors');

const createFile = (base = 2, listar = false, hasta = 10) => {

    return new Promise((resolve, reject) => {
        
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log("=====================".green);
            console.log('  Tabla del: ', base );
            console.log("=====================".green);

            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        resolve(`tabla-${base}.txt`);
    })

}

module.exports = {
    createFile
}