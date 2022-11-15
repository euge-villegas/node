import axios from "axios";
class Searchs {
    // history = ['Mendoza', 'Buenos Aires', 'Cordoba'];

    constructor() {
        //to do leer db if exists
    }

    get paramsMapbox() {
        return {
            'limit':5,
            'language':'en',
            'access_token': process.env.MAPBOX_KEY,
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
                lng: place.center[0],
                lat: place.center[1]
            }));
        } catch (error) {
            console.log(error);
            return [];
        }


    }
}

export {
    Searchs
}