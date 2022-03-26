import React, {Component} from "react";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {PlanetDetails, PlanetList} from "../sw-components";


export default class StarshipPage extends Component{

    state ={
        selectedPlanet: 5
    }

    onPlanetSelected = (selectedPlanet) => {
        this.setState({
            selectedPlanet
        });
    };
    render() {
        const { selectedPlanet } = this.state;

        const planetList = (
           <ErrorBoundry>
               <PlanetList
                   // onItemSelected = {this.onPlanetSelected}
                   // getData = {getAllPlanets}
                   // renderItem = { ({name, diameter,population}) => (
                   //     `${name} ( diameter: ${diameter}, population: ${population} )`) }
               />
           </ErrorBoundry>
        );

        const planetDetails = (
            <PlanetDetails selectedPlanet ={selectedPlanet}/>
        );

        return(
            <Row left={planetList} right={planetDetails}/>
        );
    }
}
