import React, {Component} from "react";
import {Button} from 'reactstrap'


export default class PostStatusFilter extends Component{
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'},
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
           const {filter, onFilterSelect} = this.props;
           const active = filter === name;
           const class_ = active ? 'btn-info' : 'btn-outline-secondary';
           return(
               <button
                   key={name}
                   type='button'
                   className={`btn ${class_}`}
                   onClick={() => onFilterSelect(name)}>
                   {label}</button>
           )
        });
        return(
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
