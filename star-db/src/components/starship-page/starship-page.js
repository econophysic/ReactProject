import React, {Component} from "react";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {StarshipDetails, StarshipList} from "../sw-components";

export default class StarshipPage extends Component{

    state = {
        selectedStarship: 5
    }

    onStarshipSelected = (selectedStarship) => {
        this.setState({
            selectedStarship
        });
    };

    render() {
        const { selectedStarship } = this.state;

        const starshipList =(
            <ErrorBoundry>
                <StarshipList/>
            </ErrorBoundry>
        );

        const starshipDetails =(
            <StarshipDetails selectedStarship={selectedStarship}/>
         );
        return(
            <Row left={starshipList} right={starshipDetails}/>
        );
    }
}
