import React, {Component} from "react";
import './people-page.css';
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {PersonDetails, PersonList} from "../sw-components";

export default class PeoplePage extends Component{

    state = {
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
                <PersonList/>
            </ErrorBoundry>
        );

        const personDetails = (
            <PersonDetails selectedPerson={this.state.selectedPerson}/>
        );

        return(
            <Row left={peopleList} right={personDetails}/>
        );
    }
}
