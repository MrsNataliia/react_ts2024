import React, {FC, useEffect, useState} from 'react';

import {IComment} from "../models/IComment";
import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";



const Comments: FC = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentsService.getAllComments().then(({data})=>setComments(data))

    }, []);


    return (
        <div>
            {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};