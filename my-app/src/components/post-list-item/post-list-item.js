import React, {Component} from "react";

export default class PostListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
    }

    onImportant = () => {                                   //classFields
        this.setState(({important}) => ({
            important: !important                           //toggle true
        }));
    }
    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render() {
        const {label} = this.props;
        const {important} = this.state;
        const {like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between'
        if (important){
            classNames += ' important';
        }
        if (like){
            classNames += ' like';
        }
        return (
            <div className={classNames}>
            <span className="app-list-item-label"
                  onClick ={this.onLike}>
                {label}
            </span>
                <div className="d-flex justify content-center align-item-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick ={this.onImportant}>
                        <i className="fa fa-star"/>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm">
                        <i className="fa fa-trash"/>
                    </button>
                    <i className="fa-solid fa-heart"/>
                </div>
            </div>
        )
    }
}
