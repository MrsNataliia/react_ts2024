import React, {FC} from 'react';

import {PostWithCommentsType} from "../../models/PostWithCommentsType";
import styles from './postComment.module.css'


interface IProps{
   items: PostWithCommentsType[]
}

const PostWithComments: FC<IProps> = ({items}) => {
    return (
        <div className={styles.main}>
            {
                items.map(item=>
                    <div key={item.id}>
                        <div className={styles.post}>
                            <h3 className={styles.h3}>POST ID: {item.id} <br/>{item.title}</h3>
                            <h5>UserID: {item.userId}</h5>
                            <p>{item.body}</p>
                        </div>


                        <div className={styles.comment}>
                            <h3 className={styles.h3}>COMMENTS:</h3>
                            <ul>
                            {item.comments.map(comment =>
                                    <li>{comment.body}</li>)}
                            </ul>

                        </div>


                    </div>
                )
            }

        </div>
    );
};

export {PostWithComments};
