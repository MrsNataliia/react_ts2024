import React, {FC} from 'react';

import {IPost} from "../../model/IPost";


interface IProps{
    post: IPost
}

const Post:FC <IProps> = ({post}) => {

    return (
        <div>
            <h3>{post.title}</h3>
            <p>PostID: {post.id}</p>
            <p>{post.body}</p>
            <hr/>

        </div>
    );
};

export {Post};