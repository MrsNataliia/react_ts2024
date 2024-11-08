import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {userSlice} from "./slices/usersSlice";
import {postSlice} from "./slices/postsSlice";
import {commentSlice} from "./slices/commentsSlise";




 export const store = configureStore({
     reducer: {
         userSlice: userSlice.reducer,
         postSlice: postSlice.reducer,
         commentSlice: commentSlice.reducer

     }
 })

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

