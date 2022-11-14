import axios from "axios";


class Searchs {
    history = ['Mendoza', 'Buenos Aires', 'Cordoba'];

    constructor() {
        //to do leer db if exists
    }

    async city(place = '') {
        
        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/`,
                params: {
                    'limit':5,
                    'language':'en',
                    'access_token':'pk.eyJ1IjoiZXVnZXZpIiwiYSI6ImNsYWdueGptYTBoNnEzcHFuMDYwcmZtcDIifQ.P8SLB6yJnapdOS9oFnv5zQ'
                }
            });

            const resp = instance.get(`geocoding/v5/mapbox.places/${place}.json`);
            // console.log(place, 'city');
            console.log(resp);
            return [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export {
    Searchs
}