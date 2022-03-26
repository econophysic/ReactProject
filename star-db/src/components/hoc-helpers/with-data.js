import React, {Component} from "react";
import Spinner from "../loading-spinner/loading-spiner";

const withData = (View, getData) => {

    return class extends Component{
        state = {
            data: null
        };

        onError = (err) =>{
            this.setState({
                error: true,
                loading : false
            })
        }

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
                .catch(this.onError)
        }

        render() {
            const { data } = this.state;
            if (!data) {
                return <Spinner />
            }

            return <View {...this.props} data = {data}/>
        }
    }
}

export default withData;