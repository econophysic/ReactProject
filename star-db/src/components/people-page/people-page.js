import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import './people-page.css';
import SwapiService from "../../services/swapi-services";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

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

        const peopleList = (
            <ErrorBoundry>
                <ItemList
                    onItemSelected = {this.onPersonSelected}
                    getData = {this.swapiService.getAllPeople}
                    renderItem = { ({name, mass, skinColor}) => (
                        `${name} (mass: ${mass}, Skin Color: ${skinColor})` )}
                />
            </ErrorBoundry>
        );

        const personDetails = (
                <PersonDetails personId = {this.state.selectedPerson}/>
        );

        return(
            <Row left={peopleList} right={personDetails}/>
        );
    }
}
