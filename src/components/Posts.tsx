import React, {FC, useEffect, useState} from 'react';

import {IPost} from "../models/IPost";
import {postService} from "../services/postService";
import {Post} from "./Post";


const Posts: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([] || null)


    useEffect(() => {
        postService.getAll().then(({data})=>setPosts(data))
    }, []);


    return (
        <div>

            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};