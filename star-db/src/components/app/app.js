import React, {Component} from "react";

import Header from '../header';
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import PlanetPage from "../planet-page";
import StarshipPage from "../starship-page";

export default class App extends Component {

    state ={}

    render() {
        return (
            <>
                <Header />
                <RandomPlanet />
                <PeoplePage />
                <PlanetPage/>
                <StarshipPage/>
            </>
        );
    }
}

