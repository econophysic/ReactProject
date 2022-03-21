import React, {Component} from "react";

import Header from '../header';
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-services";
import PersonDetails from "../person-details";
import Row from "../row";

export default class App extends Component {

    swapiService = new SwapiService();
    state ={}

    render() {
        const planetList =(
            <ItemList
                onItemSelected = {this.onPersonSelected}
                getData = {this.swapiService.getAllPlanets}
                renderItem = { ({name, diameter,population}) => (
                    `${name} ( diameter: ${diameter}, population: ${population} )`) }
            />
        );
        const planetDetails =(
            <PersonDetails personId = {this.state.selectedPerson}/>
        );

        const starshipList =(
            <ItemList
                onItemSelected = {this.onPersonSelected}
                getData = {this.swapiService.getAllStarships}
                renderItem = { ({name, model, passengers}) => (
                    `${name} (model: ${model}, passengers: ${passengers})`)}
            />
        );
        const starshipDetails =(
            <PersonDetails personId = {this.state.selectedPerson}/>
        );

        return (
            <>
                <Header />
                <RandomPlanet />
                <PeoplePage />
                <Row left={planetList} right={planetDetails}/>
                <Row left={starshipList} right={starshipDetails}/>
            </>
        );
    }
}

