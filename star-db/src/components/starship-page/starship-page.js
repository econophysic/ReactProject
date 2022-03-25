import React, {Component} from "react";
import ItemList from "../item-list";
import Row from "../row";
import SwapiService from "../../services/swapi-services";
import ItemDetails from "../item-details";
import ErrorBoundry from "../error-boundry";
import {Record} from "../item-details/item-details";

export default class StarshipPage extends Component{
    swapiService = new SwapiService();
    state = {
        selectedStarship: 5
    }

    onStarshipSelected = (selectedStarship) => {
        this.setState({
            selectedStarship
        });
    };

    render() {
        const { getStarship, getStarshipImage,
                getAllStarships } = this.swapiService;
        const { selectedStarship } = this.state;

        const starshipList =(
            <ErrorBoundry>
                <ItemList
                    onItemSelected = {this.onStarshipSelected}
                    getData = {getAllStarships}
                    renderItem = { ({name, model, passengers}) => (
                        `${name} (model: ${model}, passengers: ${passengers})`)}
                />
            </ErrorBoundry>
        );

        const starshipDetails =(
            <ItemDetails
                itemId = {selectedStarship}
                getData = {getStarship}
                getImageUrl ={getStarshipImage}>

                <Record field="costInCredits" label="Cost"/>
                <Record field="crew" label="Crew"/>
                <Record field="length" label="Length"/>
            </ItemDetails>
         );
        return(
            <Row left={starshipList} right={starshipDetails}/>
        );
    }
}
