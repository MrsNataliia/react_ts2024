import React, {FC, useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/headerComponents/Header";
import {MyContext} from "../context/ContextProvider";
import {IUser} from "../model/IUser";
import {usersService} from "../services/usersService";
import {IPost} from "../model/IPost";
import {IComment} from "../model/IComment";
import {postsService} from "../services/postsService";
import {commentsService} from "../services/commentsService";


const MainLayout: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [posts, setPosts] = useState<IPost[]>([])
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        usersService.getAllUsers().then(value => setUsers(value.data))
        postsService.getAllPosts().then(value => setPosts(value.data))
        commentsService.getAllComments().then(value => setComments(value.data))
    }, []);



    return (
        <div>
            <Header/>
            <MyContext.Provider value={{
                usersStore: {
                    allUsers: users},
                postsStore: {
                    allPosts: posts},
                commentsStore:{
                    allComments: comments
                }
            }}>
                <Outlet/>
            </MyContext.Provider>



        </div>
    );
};

export {MainLayout};