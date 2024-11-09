import React, {FC} from 'react';

import {IPost} from "../../models/IPost";
import styles from './post.module.css'

interface IProps{
    post: IPost
}

const Post: FC <IProps> = ({post}) => {
    return (
        <div className={styles.main}>
            <h3 className={styles.h3}>{post.title}</h3>
            <h5>UserID: {post.userId}</h5>
            <h5>PostID: {post.id}</h5>
            <p>{post.body}</p>
        </div>
    );
};

export {Post};