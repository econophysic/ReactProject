import React from 'react';
import ReactDOM from 'react-dom';

class SwapiService {
    _apiBase = 'http https://swapi.dev/api';
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(res.status);
        }
        return await res.json();
    }

   async getAllPeople(){
       const res = await this.getResourse(`/people/`);
       return res.results;
    }

    getPersone(id){
        return this.getResourse(`/people/${id}/`)
    }

    async getAllPlanets(){
        const res = await this.getResourse(`/planet/`);
        return res.results;
    }

    getPlanet(id){
        return this.getResourse(`/planet/${id}/`)
    }

    async getAllStarships(){
        const res = await this.getResourse(`/starship/`);
        return res.results;
    }

    getStarship(id){
        return this.getResourse(`/starship/${id}/`)
    }
}


const swapi  = new SwapiService();

ReactDOM.render(


  ,document.getElementById('root')
);


