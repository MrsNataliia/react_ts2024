import React from 'react';

import {useContextProvider} from "../../context/ContextProvider";
import {Post} from "./Post";

const Posts = () => {

   const {postsStore: {allPosts}} = useContextProvider()

    return (
        <div>
            {allPosts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};