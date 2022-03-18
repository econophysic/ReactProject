import React, {Component} from "react";

import Header from '../header';
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

export default class App extends Component {

    state ={
        hasError: false,
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log('error: ', error);
        console.log('info: ', info);
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage />
            </div>
        );
    }
}

