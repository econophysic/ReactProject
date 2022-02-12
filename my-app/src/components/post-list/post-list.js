import React from "react";
import PostListItem from "../post-list-item";


const PostList = ({posts}) =>{
    const elements = posts.map( (item) => {
        const {id, ...itemProps} = item;                    //destruct item
        return(
            <li key={id} className={'list-group-item'}>
                <PostListItem {...itemProps}                //Spread operator
                    // label={item.label}
                    // important={item.important}
                />
            </li>
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;