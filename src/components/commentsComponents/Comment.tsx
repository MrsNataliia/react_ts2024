import React, {FC} from 'react';

import {IComment} from "../models/IComment";

interface IProps{
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {


    return (
        <div>
            <h3>{comment.name}</h3>
            <p>PostID: {comment.postId}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export {Comment};