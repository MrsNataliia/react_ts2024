
import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IPost} from "../../models/IPost";
import {postsService} from "../../services/postsService";


type PostSliceType = {
    posts: IPost[]
    post: IPost | null
}

const postInitState: PostSliceType ={
    posts: [],
    post: null

}

const loadPosts = createAsyncThunk('postSlice/loadPosts', async (_, thunkAPI)=>{
    try {
        let posts = await postsService.getAllPosts()
        return thunkAPI.fulfillWithValue(posts)
    }catch (e){
        const error = e as AxiosError
        return thunkAPI.rejectWithValue(error.response?.data)
    }
})

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action)=>{
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action) =>{
                console.log(action.payload)
            })
            .addMatcher(isRejected(loadPosts), (state, action)=>{
                console.log('isRejected')
            })
            .addMatcher(isFulfilled(loadPosts), (state, action)=>{
                console.log('isFulfilled')
            })


})

export const postSliceActions = {...postSlice.actions, loadPosts}

