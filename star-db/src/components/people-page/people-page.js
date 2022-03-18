import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import './people-page.css';

export default class PeoplePage extends Component{

    state ={
        selectedPerson: 5,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
        console.log('error: ', error);
        console.log('info: ', errorInfo);
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
        console.log(selectedPerson)
    };

    render() {
        if (this.state.hasError){
            return <ErrorIndicator/>
        }

        return(
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected = {this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId = {this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
}
