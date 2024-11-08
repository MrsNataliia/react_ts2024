import React, {FC} from 'react';

import {IUser} from "../../models/IUser";

interface IProps {
    user: IUser
}

const User: FC <IProps> = ({user}) => {
    return (
        <div>
            {user.name}
        </div>
    );
};

export {User};