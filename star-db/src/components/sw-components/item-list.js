import React from 'react';
import SwapiService from '../../services/swapi-services';
import {withData} from '../hoc-helpers'
import ItemList from "../item-list";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, func) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {func}
            </Wrapped>
        )
    };
};


const ListForPerson = withData(withChildFunction(
    ItemList,
    ({name, gender, eyeColor}) => (
             `${name} ( gender: ${gender}, eyeColor: ${eyeColor} )`)),
    getAllPeople);


const ListForPlanet = withData(withChildFunction(
    ItemList,
    ({name, diameter,population}) => (
             `${name} ( diameter: ${diameter}, population: ${population} )`)),
    getAllPlanets);


const ListForStarship = withData(withChildFunction(
    ItemList,
    ({name, model, passengers}) => (
        `${name} (model: ${model}, passengers: ${passengers})`)),
    getAllStarships);



const PersonList = withData(ListForPerson,getAllPeople);

const PlanetList = withData(ListForPlanet,getAllPlanets);

const StarshipList = withData(ListForStarship,getAllStarships);

export {
    StarshipList,
    PlanetList,
    PersonList
}