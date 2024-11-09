import React, {FC} from 'react';

import {IComment} from "../../models/IComment";
import styles from './comment.module.css'


interface IProps{
    comment: IComment
}

const Comment: FC <IProps> = ({comment}) => {
    return (
        <div className={styles.main}>
            <h2 className={styles.h2}>{comment.name}</h2>
            <h4>PostID: {comment.postId}</h4>
            <p>{comment.body}</p>

        </div>
    );
};

export {Comment};