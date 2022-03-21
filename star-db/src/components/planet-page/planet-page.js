import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Row from "../row";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry";

export default class StarshipPage extends Component{
    swapiService = new SwapiService();
    state = {};

    render() {
        const planetList = (
           <ErrorBoundry>
               <ItemList
                   onItemSelected = {this.onPersonSelected}
                   getData = {this.swapiService.getAllPlanets}
                   renderItem = { ({name, diameter,population}) => (
                       `${name} ( diameter: ${diameter}, population: ${population} )`) }
               />
           </ErrorBoundry>
        );
        const planetDetails = (
            <PersonDetails personId = {this.state.selectedPerson}/>
        );

        return(
            <Row left={planetList} right={planetDetails}/>
        );
    }
}
