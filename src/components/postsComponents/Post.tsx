import React, {FC} from 'react';

import {IPost} from "../models/IPost";

interface IProps{
    post: IPost
}

const Post: FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>UserID: {post.userId}</p>
            <p>{post.body}</p>
        </div>
    );
};

export {Post};