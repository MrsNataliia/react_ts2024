import React, {FC, useEffect, useState} from 'react';

import {IUser} from "../models/IUser";
import {usersService} from "../../services/usersService";

import {User} from "./User";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        usersService.getAllUsers().then(({data})=>setUsers(data))

    }, []);



    return (
        <div>
            {users.map((user)=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};