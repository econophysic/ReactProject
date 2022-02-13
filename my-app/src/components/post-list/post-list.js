import React from "react";
import PostListItem from "../post-list-item";
import {ListGroup} from "reactstrap";


const PostList = ({posts, onDelete}) =>{
    const elements = posts.map( (item) => {
        const {id, ...itemProps} = item;                    //destruct item
        return(
            <li key={id} className={'list-group-item'}>
                <PostListItem
                    {...itemProps}
                    onDelete = {() => onDelete(id)}
                    // label={item.label}
                    // important={item.important}
                />
            </li>
        )
    });

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}
export default PostList;