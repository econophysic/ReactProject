import React, {Component} from "react";

import Header from '../header';
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-services";
import PersonDetails from "../person-details";

export default class App extends Component {

    swapiService = new SwapiService();

    state ={
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log('error: ', error);
        console.log('info: ', info);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected = {this.onPersonSelected}
                            getData = {this.swapiService.getAllPlanets}
                            renderItem = { ({name, diameter,population}) => (
                                `${name} ( diameter: ${diameter}, population: ${population} )`) }
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>
                    <div className="row mb2">
                        <div className="col-md-6">
                            <ItemList
                                onItemSelected = {this.onPersonSelected}
                                getData = {this.swapiService.getAllStarships}
                                renderItem = { ({name, model, passengers}) => (
                                    `${name} (model: ${model}, passengers: ${passengers})`)}
                            />
                        </div>
                        <div className="col-md-6">
                            <PersonDetails personId = {this.state.selectedPerson}/>
                        </div>
                    </div>
            </div>
        );
    }
}

