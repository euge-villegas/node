import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { saveDB } from './helpers/saveFile.js';
import { Tasks } from './models/tasks.js';


const main = async() => {

    let opt = '';
    const tasks = new Tasks();

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
                console.log(tasks.arrayList);
                break;
        }

        // saveDB(tasks.arrayList);

        await pause();

        
    } while (opt !== '0');
    // pause()

}

main()