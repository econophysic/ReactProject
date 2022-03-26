import React, {Component} from 'react';
import './item-details.css';
import Spinner from "../loading-spinner/loading-spiner";
import joda from '../../img/dart.jpg'

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    )
}
export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: false,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onError = (err) =>{
        this.setState({
            error: true,
            loading : false
        })
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            loading: false
        });
    }

    updateItem = () => {
        const { itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return
        }
        console.log("itemID "+itemId);
        getData(itemId)
            .then((item)=>{
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            })
            .catch(this.onError)
    }

    render() {
        const { item, loading, image } = this.state;

        if (!item) {
            return <span>Select a item from a list</span>
        }
        const { name } = item;

        const spinner = loading ? <Spinner /> : null;
        return (
            <div className="item-details card">
                { spinner }
                <img className="item-image"
                     src={image}
                     onError={({ currentTarget }) => {
                         currentTarget.onerror = null;
                         currentTarget.src = joda;
                     }}
                     alt={name}
                />

                <div className="card-body">
                    <h4>{ name }</h4>

                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child)  => {
                                return React.cloneElement(child, {item} );
                            })
                        }
                    </ul>

                </div>
            </div>
        );
    }
}
