import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {PaginationComponent} from "../components/PaginationComponent";
import {IUser} from "../models/IUser";
import {usersService} from "../services/usersService";
import {Users} from "../components/Users";

const UsersPage: FC = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([]);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page');

        if (page){
            usersService.users
                .getAll(+page)
                .then(value =>{
                    setUsers(value.users);
                    const lastId = value.users[value.users.length -1].id

                    if (lastId >= value.total){
                        setFlag(true);
                    }else {
                        setFlag(false)
                    }
                } )
        }
    }, [query]);

    return (
        <div>
            <Users users={users}/>
            <PaginationComponent flag={flag}/>
        </div>
    );
};

export {UsersPage};