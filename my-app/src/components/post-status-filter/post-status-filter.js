import React from "react";
import {Button} from 'reactstrap'


const PostStatusFilter = () =>{
    return(
        <div className="btn-group">
            <Button outline color={'primary'}>All</Button>
            <button type="button" className='btn btn-outline-secondary'>Liked</button>
        </div>
    )
}
export default PostStatusFilter;