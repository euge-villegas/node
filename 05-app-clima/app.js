import dotenvn from "dotenv";
dotenvn.config({path:'.env'})
import { inquirerMenu, pausa, readInput, listPlaces } from "./helpers/inquirer.js"
import { Searchs } from "./models/searchs.js";

// console.log(process.argv);

const main = async() => {

    const searchs = new Searchs();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Show message
                const place = await readInput('City: ');
                //Search places
                const places = await searchs.city(place);
                //Select an option
                const id = await listPlaces(places);
                const selectedPlace = places.find(l => l.id === id);
                // console.log(selectedPlace);
                
                // console.log('City info');
                console.log('City: ', selectedPlace.name);
                console.log('Latitud: ', selectedPlace.lat);
                console.log('Longitud: ', selectedPlace.lng);
                // console.log('Temperature: ');
                // console.log('Min: ');
                // console.log('Max: ');
                break;
        }

        if (opt !== 0) await pausa();
    } while (opt !== 0);
}

main();