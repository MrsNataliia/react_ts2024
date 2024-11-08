import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

interface IProps{
    comment: IComment
}

const Comment: FC <IProps> = ({comment}) => {
    return (
        <div>
            {comment.body}
            <hr/>
        </div>
    );
};

export {Comment};