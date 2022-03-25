import React, {Component} from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry";
import {Record} from "../item-details/item-details";

export default class StarshipPage extends Component{
    swapiService = new SwapiService();
    state ={
        selectedPlanet: 5
    }

    onPlanetSelected = (selectedPlanet) => {
        this.setState({
            selectedPlanet
        });
    };
    render() {
        const { getPlanet, getPlanetImage,
            getAllPlanets } = this.swapiService;
        const { selectedPlanet } = this.state;

        const planetList = (
           <ErrorBoundry>
               <ItemList
                   onItemSelected = {this.onPlanetSelected}
                   getData = {getAllPlanets}
                   renderItem = { ({name, diameter,population}) => (
                       `${name} ( diameter: ${diameter}, population: ${population} )`) }
               />
           </ErrorBoundry>
        );

        const planetDetails = (
            <ItemDetails
                itemId = {selectedPlanet}
                getData = {getPlanet}
                getImageUrl = {getPlanetImage}>

                <Record field="climate" label="Climate"/>
                <Record field="rotationPeriod" label="Rotation Period"/>
                <Record field="terrain" label="Terrain"/>
            </ItemDetails>
        );

        return(
            <Row left={planetList} right={planetDetails}/>
        );
    }
}
