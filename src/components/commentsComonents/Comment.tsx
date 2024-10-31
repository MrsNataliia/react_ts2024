import React, {FC} from 'react';

import {IComment} from "../../model/IComment";

interface IProps{
    comment: IComment
}

const Comment: FC <IProps> = ({comment}) => {


    return (
        <div>
            <h3>PostID: {comment.postId}</h3>
            <p>{comment.body}</p>
            <hr/>
        </div>
    );
};

export {Comment};