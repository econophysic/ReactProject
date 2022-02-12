import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './com ponents/app/';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 25
        }
        // this.nextYear = this.nextYear.bind(this);
    }
    // nextYear() {
    //     this.setState( state => ({
    //         years: ++state.years
    //     }))
    // }
    nextYear = () => { //classFields
        this.setState( state => ({
            years: ++state.years
        }))
    }
    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return(
            <>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name} {surname}, years - {years} </h1>
                <a href={link}> My prof</a>
            </>
        )
    }
}

const All = () =>{
    return(
        <>
            <WhoAmI name = 'Roma' surname = 'Piven' link = 'https://cdnjs.com/libraries' />
            <WhoAmI name = 'Sanya' surname = 'Sashka' link = 'https://cdnjs.com/libraries' />
            <WhoAmI name = 'WHO?' surname = 'SIRMASRS' link = 'https://cdnjs.com/libraries' />
        </>
    )
}


ReactDOM.render(
    <All/>, document.getElementById('root')
);



