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
                if (id === '0') continue;

                const selectedPlace = places.find(l => l.id === id);
                //Save selected places
                searchs.addHistory(selectedPlace.name)
                //Weather
                const weather = await searchs.placeWeather(selectedPlace.lat, selectedPlace.lon);

                // console.log('City info');
                console.clear()
                console.log('\nCity information:');
                console.log('City: ', selectedPlace.name);
                console.log('Latitud: ', selectedPlace.lat);
                console.log('Longitud: ', selectedPlace.lon);
                console.log('Temperature: ', weather.temp);
                console.log('Min: ', weather.min);
                console.log('Max: ', weather.max);
                console.log('Description: ', weather.desc.green);
                break;
            case 2:
                searchs.history.forEach((place, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${place}`);
                })
            break;
        }

        if (opt !== 0) await pausa();
    } while (opt !== 0);
}

main();