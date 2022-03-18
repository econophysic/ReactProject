import React, {Component} from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-services';
import Spinner from "../loading-spinner/loading-spiner";
import ErrorIndicator from "../error-indicator";
import PlanetView from "./planet-view";


export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        buttonClick: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 2500);

    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
            loading:false,
            error: false
        });
    }
    onError = (err) =>{
        this.setState({
            error: true,
            loading : false
        })
    }
    updatePlanet = () =>{
        const id = Math.floor(Math.random()*20) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    onClick = () => {
        this.setState({
            buttonClick: !this.state.buttonClick,
        });
    }

    render() {

        const { planet, loading, error , buttonClick} = this.state;

        const hasData = !(error || loading);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData && !buttonClick ? <PlanetView planet={planet}/> : null;
        return (
            <>
                <div className="random-planet jumbotron rounded card">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
                <button className="random-button"
                onClick= {this.onClick}
                >
                    Toggle Random Planet
                </button>
            </>
        );
    }
}
