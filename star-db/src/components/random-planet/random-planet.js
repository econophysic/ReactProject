import React, {Component} from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-services';
import Spinner from "../loading-spinner/loading-spiner";
import PlanetView from "./planet-view";
import ErrorBoundry from "../error-boundry";


export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        buttonClick: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 4500);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onError = (err) =>{
        this.setState({
            loading : false
        })
    }
    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
            loading:false,
        });
    };

    updatePlanet = () =>{
        const id = Math.floor(Math.random()*23) + 2;
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

        const { planet, loading, buttonClick} = this.state;

        const hasData = !loading;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData && !buttonClick ? <PlanetView planet={planet}/> : null;
        return (
            <ErrorBoundry>
                <div className="random-planet jumbotron rounded card">
                    {spinner}
                    {content}
                </div>
                <button className="random-button"
                onClick= {this.onClick}
                >
                    Toggle Random Planet
                </button>
            </ErrorBoundry>
        );
    }
}
