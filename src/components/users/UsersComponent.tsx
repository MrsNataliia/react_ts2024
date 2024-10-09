import React, {FC, useEffect, useState} from 'react';

import {IUser} from "../../models/IUserModel";
import {getAllUsers} from "../../services/userService";
import {UserComponent} from "./UserComponent";

type IProps = {postsByUser?:(userId:number)=>void}

const UsersComponent: FC <IProps> = ({postsByUser}) => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getAllUsers().then(({data:{users}})=>setUsers(users));
    }, []);

    return (
        <div>
            {users.map(user=><UserComponent key={user.id} user={user} postsByUser={postsByUser}/>)}
        </div>
    );
};

export {UsersComponent};