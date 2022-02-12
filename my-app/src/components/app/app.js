import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

const App = () => {
    const data = [
        {label: 'Going to learn React', important : true, id : 'sdw' },
        {label: 'Or not?', important : false, id : 's1ed1sw'},
        {label: 'I need a brake', important : false, id : 's12aw'},
         'dsdsdsdsds',
        '111'

    ];

    const filteredData = data.filter(item => typeof item === 'object'); //if not a obj delete this massage

    return(
   <div className="app">
       <AppHeader/>
       <div className="search-panel d-flex">
           <SearchPanel/>
           <PostStatusFilter/>
       </div>
       <PostList posts = {filteredData}/>
       <PostAddForm/>
   </div>
    )
}

export default App;