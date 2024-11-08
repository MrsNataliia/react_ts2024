import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {commentSliceActions} from "../../redux/slices/commentsSlise";
import {Comment} from "./Comment";

const Comments = () => {
    let {comments} = useAppSelector(state => state.commentSlice)
    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, []);

    return (
        <div>
            {
                comments.map(comment=> <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};