import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userSliceActions} from "../../redux/slices/usersSlice";
import {User} from "./User";


const Users = () => {
    let {users} = useAppSelector(state => state.userSlice)
    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};