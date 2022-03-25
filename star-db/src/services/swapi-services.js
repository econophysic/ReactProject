export default  class SwapiService {
    _apiBase = 'https://swapi.dev/api/';
    _imageBase = 'https://starwars-visualguide.com/assets/img/'

     checkExists(imageUrl, callback) {
        let img = new Image();

        img.onerror = function() {
            callback(false);
        };

        img.onload = function() {
            callback(true);
        };

        img.src = imageUrl;
    }

    getResource = async(url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json()
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }
    getPerson = async (id) => {
       const person = await this.getResource(`/people/${id}`);
       return this._transformPerson(person);
    }
    getPersonImage = ({id}) =>{
         return `${this._imageBase}characters/${id}.jpg`
    }


    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet)
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(planet);
    }
    getPlanetImage = ({id}) =>{
        return `${this._imageBase}planets/${id}.jpg`
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship)
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }
    getStarshipImage = ({id}) =>{
        return `${this._imageBase}starships/${id}.jpg`
    }


    _extraId = (item) => {
        const idRegEx = /\/([0-9]*)\/$/;
        return item.url.match(idRegEx)[1];
    }

    _transformStarship = (starship) => {
        return {
            id: this._extraId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoOpacity: starship.cargoOpacity
        }
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extraId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
            terrain: planet.terrain
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extraId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            height: person.height,
            hairColor: person.hair_color,
            mass: person.mass,
            eyeColor: person.eye_color,
            skinColor: person.skin_color
        }
    };
}