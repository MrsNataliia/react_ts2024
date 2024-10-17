import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layout/MainLayout";
import {UsersPage} from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import {CommentsPage} from "../pages/CommentsPage";
import {HomePage} from "../pages/HomePage";
import {ErrorPage} from "../layout/ErrorPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,

        children: [
            {index: true,
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
            }
        ],
        errorElement: <ErrorPage/>
    }
])