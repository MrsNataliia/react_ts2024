import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";

import {IUser} from "../../models/IUser";
import {usersService} from "../../services/usersService";


type UserSliceType = {
    users: IUser[]
    user: IUser | null
}

const userInitState: UserSliceType ={
    users: [],
    user: null

}

const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI)=>{
    try {
        let users = await usersService.getAllUsers()
        return thunkAPI.fulfillWithValue(users)
    }catch (e){
        const error = e as AxiosError
        return thunkAPI.rejectWithValue(error.response?.data)
    }
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action)=>{
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) =>{
                console.log(action.payload)
            })
            .addMatcher(isRejected(loadUsers), (state, action)=>{
                console.log('isRejected')
            })
            .addMatcher(isFulfilled(loadUsers), (state, action)=>{
                console.log('isFulfilled')
            })
})


export const userSliceActions = {...userSlice.actions, loadUsers}



