import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";
import {Comment} from "./Comment";

const Comments = () => {

    const {commentsStore: {allComments}} = useContextProvider()

    return (
        <div>
            {allComments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};