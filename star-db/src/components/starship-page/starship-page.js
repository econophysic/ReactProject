import React, {Component} from "react";
import ItemList from "../item-list";
import Row from "../row";
import SwapiService from "../../services/swapi-services";
import PersonDetails from "../person-details";
import ErrorBoundry from "../error-boundry";

export default class StarshipPage extends Component{
    swapiService = new SwapiService();
    state ={};

    render() {
        const starshipList =(
            <ErrorBoundry>
                <ItemList
                    onItemSelected = {this.onPersonSelected}
                    getData = {this.swapiService.getAllStarships}
                    renderItem = { ({name, model, passengers}) => (
                        `${name} (model: ${model}, passengers: ${passengers})`)}
                />
            </ErrorBoundry>
        );

        const starshipDetails =(
            <PersonDetails personId = {this.state.selectedPerson}/>
         );
        return(
            <Row left={starshipList} right={starshipDetails}/>
        );
    }
}
