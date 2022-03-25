import React, {Component} from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import './people-page.css';
import SwapiService from "../../services/swapi-services";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {Record} from "../item-details/item-details";

export default class PeoplePage extends Component{
    swapiService = new SwapiService();

    state ={
        selectedPerson: 5
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    };

    render() {
        const { getPerson, getPersonImage,
                getAllPeople } = this.swapiService;
        const { selectedPerson } = this.state;
        const peopleList = (
            <ErrorBoundry>
                <ItemList
                    onItemSelected = {this.onPersonSelected}
                    getData = {getAllPeople}
                    renderItem = { ({name, mass, skinColor}) => (
                        `${name} (mass: ${mass}, Skin Color: ${skinColor})` )}
                />
            </ErrorBoundry>
        );

        const personDetails = (
                <ItemDetails
                    itemId = {selectedPerson}
                    getData = {getPerson}
                    getImageUrl ={getPersonImage}
                >

                    <Record field="gender" label="Gender"/>
                    <Record field="eyeColor" label="Eye Color"/>
                    <Record field="birthYear" label="Birth Year"/>
                </ItemDetails>

        );

        return(
            <Row left={peopleList} right={personDetails}/>
        );
    }
}
