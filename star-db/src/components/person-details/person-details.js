import React, {Component} from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-services";
import Spinner from "../loading-spinner/loading-spiner";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {
            // console.log(1);
            this.updatePerson();
            // console.log(2);
        }
    }

    onError = (err) =>{
        console.log('error')
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            loading: false
        });
    }

    updatePerson =()=> {
        const { personId } = this.props;
        if (!personId) {
            return
        }
        console.log("personID "+personId);
        this.swapiService
            .getPerson(personId)
            .then(this.onPersonLoaded)
            .catch(this.onError)
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }

        const { person: {
            id, name, gender,
            birthYear, eyeColor }, loading } = this.state;

        const spinner = loading ? <Spinner /> : null;

        return (
            <div className="person-details card">
                { spinner }
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt={name}
                />

                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{ gender }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{ birthYear }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{ eyeColor }</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

/*import React, {Component} from 'react';

import './person-details.css';

export default class PersonDetails extends Component {

    render() {
        return (
            <div className="person-details card">
                <img className="person-image"
                     src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}*/