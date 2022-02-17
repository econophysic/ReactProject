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
                {label: 'I need a brake', important: false, id: 3}
            ],
            term: '',
            filter: 'all'
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

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return{
                data: newArr
            }
        })
    }
    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return{
                data: newArr
            }
        })
    }

    searchPost(items, term){
        if(term.length === 0){
            return items
        }
        return items.filter( (item) => item.label.indexOf(term) > -1);
    }

    filterPost(items, filter){
        if (filter === 'like'){
            return items.filter(item => item.like)
        } else {
            return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) =>{
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return(
            <AppBlock>
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect = {this.onFilterSelect}/>
                </div>
                <PostList posts = {visiblePosts}
                          onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}



