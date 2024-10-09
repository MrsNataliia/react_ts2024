import React, {FC} from 'react';

import {IPost} from "../../models/IPostModel";
import styles from './Post.module.css'

interface IProps{
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {

    return (
        <div className={styles.main}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.id}><u>UserId:</u> <b>{post.userId}</b></p>
            <p className={styles.id}><u>PostId:</u> <b>{post.id}</b></p>
            <p className={styles.text}>{post.body}</p>
        </div>
    );
};

export {PostComponent};