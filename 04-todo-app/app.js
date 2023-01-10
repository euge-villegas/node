import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { readDB, saveDB } from './helpers/saveFile.js';
import { Tasks } from './models/tasks.js';


const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.chargeTaskFromArray(tasksDB)
    }


    do {
        // Print menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Create task
                const descripcion = await readInput('Description: ');
                tasks.createTask(descripcion);
                console.log(descripcion)
                break;
            case '2':
                // Task list
                tasks.fullList();
                break;
            case '3':
                tasks.pendingTask(true);
                break;
            case '4':
                tasks.pendingTask(false);
                break;
        }

        saveDB(tasks.arrayList);

        await pause();

        
    } while (opt !== '0');
    // pause()

}

main()