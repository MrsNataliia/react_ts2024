import React, {FC} from 'react';

import {IUser} from "../models/IUser";

interface IProps {
   user: IUser
}

const User: FC<IProps> = ({user}) => {
    return (
        <div>
            <p>{user.name}</p>
        </div>
    );
};

export {User};