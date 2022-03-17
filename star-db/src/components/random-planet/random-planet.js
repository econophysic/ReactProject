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
        loading: true
    };

    constructor(props) {
        super(props);
        this.updatePlanet();
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
    updatePlanet() {
        const id = Math.floor(Math.random()*20) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {

        const { planet, loading, error } = this.state;

        const hasData = !(error || loading);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        return (
            <div className="random-planet jumbotron rounded card">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

// const PlanetView = ({ planet }) => {
//     const { id, name, population,
//         rotationPeriod, diameter} = planet;
//     return(
//         <>
//             <img className="planet-image"
//                  src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
//                  title={name}
//             />
//             <div>
//                 <h4>{name}</h4>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">
//                         <span className="term">Population</span>
//                         <span>{population}</span>
//                     </li>
//                     <li className="list-group-item">
//                         <span className="term">Rotation Period</span>
//                         <span>{rotationPeriod}</span>
//                     </li>
//                     <li className="list-group-item">
//                         <span className="term">Diameter</span>
//                         <span>{diameter}</span>
//                     </li>
//                 </ul>
//             </div>
//         </>
//     );
// }
