import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IComment} from "../../models/IComment";
import {commentsService} from "../../services/commentsService";


type CommentSliceType = {
    comments: IComment[]
    comment: IComment | null
}

const commentInitState: CommentSliceType ={
    comments: [],
    comment: null

}

const loadComments = createAsyncThunk('commentSlice/loadComments', async (_, thunkAPI)=>{
    try {
        let comments = await commentsService.getAllComments()
        return thunkAPI.fulfillWithValue(comments)
    }catch (e){
        const error = e as AxiosError
        return thunkAPI.rejectWithValue(error.response?.data)
    }
})

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action)=>{
                state.comments = action.payload
            })
            .addCase(loadComments.rejected, (state, action) =>{
                console.log(action.payload)
            })
            .addMatcher(isRejected(loadComments), (state, action)=>{
                console.log('isRejected')
            })
            .addMatcher(isFulfilled(loadComments), (state, action)=>{
                console.log('isFulfilled')
            })
})

export const commentSliceActions = {...commentSlice.actions, loadComments}