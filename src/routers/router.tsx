import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {HomePage} from "../pages/HomePage";
import {UsersPage} from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import {CommentsPage} from "../pages/CommentsPage";
import {PostWithCommentsPage} from "../pages/PostWithCommentsPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'users',
                element: <UsersPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
            {
                path: 'postComments',
                element: <PostWithCommentsPage/>
            }
        ]
    }
])