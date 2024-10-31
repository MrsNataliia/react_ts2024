import React, {FC, useEffect, useMemo, useState} from 'react';

import {useContextProvider} from "../../context/ContextProvider";
import {PostWithCommentsType} from "../../model/PostWithCommentsType";
import {PostWithComments} from "./PostWithComments";


const PostsWithComments: FC = () => {

    const {postsStore: {allPosts}, commentsStore: {allComments}} = useContextProvider()
    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentsType[]>([])

    const postWithCommentsArr = useMemo(() =>{
        return allPosts.map(post => {
      return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
  })
    }, [allPosts, allComments])


    useEffect(() => {
        setPostsWithCommentsState(postWithCommentsArr)
    }, [postWithCommentsArr]);



    return (
        <div>
            <PostWithComments items={postsWithCommentsState}/>
        </div>
    );
};

export {PostsWithComments};