import { inquirerMenu, 
         pausa,
         readInput } from './helpers/inquirer.js';
import { saveDB, readDB } from './helpers/saveFile.js'
import { Tareas } from './model/tareas.js';

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = readDB();

    if (tareasDB) {
        tareas.addTasksFromArray(tareasDB);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Description: ');
                tareas.crearTarea(desc)
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendComple(true);
                break;
            case '4':
                tareas.listarPendComple(false);
                break;
        }
        console.log(tareas.listArr);
        saveDB(tareas.listArr);

        await pausa();

    } while (opt !== '0')
} 

main();