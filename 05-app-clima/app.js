import { inquirerMenu, pausa, readInput } from "./helpers/inquirer.js"
import { Searchs } from "./models/searchs.js";


const main = async() => {

    const searchs = new Searchs();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const place = await readInput('City: ');
                searchs.city(place)
                // console.log('City info');
                // console.log('City: ');
                // console.log('Latitud: ');
                // console.log('Longitud: ');
                // console.log('Temperature: ');
                // console.log('Min: ');
                // console.log('Max: ');
                break;
        }

        if (opt !== 0) await pausa();
    } while (opt !== 0);
}

main();