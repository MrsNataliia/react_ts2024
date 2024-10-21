import {createBrowserRouter} from "react-router-dom";
import React from "react";

import {MainLayout} from "../layouts/MainLayout";
import {HomePage} from "../pages/HomePage";
import {UsersPage} from "../pages/UsersPage";

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
                path: "users",
                element: <UsersPage/>
            }
        ]
    }
])