import * as fs from 'fs';
import axios from "axios";
import capitalize from 'capitalize';
class Searchs {
    history = [];
    dbPath = './db/database.json'

    constructor() {
        this.readDB();
    }

    get capitalizedHistory() {
        return this.history.map(place => {
            return capitalize.words(place)
        });
    }

    get paramsMapbox() {
        return {
            'limit':5,
            'language':'en',
            'access_token': process.env.MAPBOX_KEY,
        }
    }
    
    get paramsOpenweather() {
        return {
            units: 'metric',
            language: 'en',
            appid: process.env.OPENWEATHER_KEY,
        }
    }

    async city(place = '') {
        
        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/`,
                params: this.paramsMapbox
            });

            const resp = await instance.get(`geocoding/v5/mapbox.places/${place}.json`);
            // console.log(place, 'city');
            return resp.data.features.map(place => ({
                id: place.id,
                name: place.place_name,
                lon: place.center[0],
                lat: place.center[1]
            }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async placeWeather(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/`,
                params: {lat, lon, ...this.paramsOpenweather}
            });

            const resp = await instance.get(`weather`);

            const {weather, main} = resp.data;
            
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
            
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    addHistory(place = '') {
        if (this.history.includes(place.toLocaleLowerCase())) {
            return;
        }

        this.history = this.history.splice(0, 4)

        this.history.unshift(place.toLocaleLowerCase());

        this.saveDB(); //saving in db

    }

    saveDB() {
        const payload = {
            history: this.history
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }

    readDB() {
        if(!fs.existsSync(this.dbPath)) return;

        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
        const data = JSON.parse(info);

        this.history = data.history;
    }
}

export {
    Searchs
}