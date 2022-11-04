const fs = require('fs');
const colors = require('colors');

const createFile = (base = 2, listar = false) => {

    return new Promise((resolve, reject) => {
        
    
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.green} ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log("=====================".green);
            console.log('  Tabla del: ', base );
            console.log("=====================".green);
            console.log(salida);
        }
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        resolve(`tabla-${base}.txt`);
    })

}

module.exports = {
    createFile
}