import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";

import {postSliceActions} from "../../redux/slices/postsSlice";
import {Post} from "./Post";


const Posts = () => {
    let {posts} = useAppSelector(state => state.postSlice)
    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);

    return (
        <div>
            {
                posts.map(post=> <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};