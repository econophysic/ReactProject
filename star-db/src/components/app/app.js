import React, {Component} from "react";

import Header from '../header';
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import PlanetPage from "../planet-page";
import StarshipPage from "../starship-page";
import {SwapiServiseProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-services";

export default class App extends Component {
    swapiService = new SwapiService();
    state ={}

    render() {
        return (
            <>
                <SwapiServiseProvider value={this.swapiService}>
                    <Header />
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetPage/>
                    <StarshipPage/>
                </SwapiServiseProvider>
            </>
        );
    }
}

