import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

// import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`                         
    margin: 20px auto;
    max-width: 800px;
`;

/*const StyledAppBlock = styled(AppBlock)`                    // Change some block using inherit style (AppBlock)
  background-color: grey;
`;*/


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'Or not?', important: false, id: 2},
                {label: 'I need a brake', important: false, id: 3},
                'dsdsdsdsds',
                '111'
            ],
        }
        this.maxId = 4;
    }
    // filterData = (data) =>{
    //     this.setState(({data}) => {
    //         return  data.filter(item => typeof item === 'object')
    //     });
    // }
    deleteItem = (id) =>{
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index+1);
            const newArr = [...before,...after];
            return{
                data: newArr
            }
        });
    }
    addItem = (body) => {
         const newItem ={
             label : body,
             important: false,
             id: this.maxId++
         }
        this.setState(({data}) => {
           const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    render() {
        return(
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts = {this.state.data}
                          onDelete={this.deleteItem}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}



