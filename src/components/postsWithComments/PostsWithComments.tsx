import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";

import {postSliceActions} from "../../redux/slices/postsSlice";
import {commentSliceActions} from "../../redux/slices/commentsSlise";
import {PostWithComments} from "./PostWithComments";


const PostsWithComments = () => {
    let {posts} = useAppSelector(state => state.postSlice)
    let {comments} = useAppSelector(state => state.commentSlice)
    let dispatch =useAppDispatch()

    useEffect(() => {
        dispatch(postSliceActions.loadPosts)
        dispatch(commentSliceActions.loadComments)
    }, []);

    const postWithComments = useMemo(() =>{
        return posts.map(post => {
            return {...post, comments: comments.filter(comment => comment.postId === post.id)}
        })
    }, [posts, comments])

    return (
        <div>
            {
                <PostWithComments items={postWithComments}/>
            }


        </div>
    );
};

export {PostsWithComments};