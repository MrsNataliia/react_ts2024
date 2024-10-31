import React, {FC} from 'react';

import {IUser} from "../../model/IUser";

interface IProps {
  user: IUser
}

const User: FC <IProps> = ({user}) => {
    return (
        <div>
            {user.id} {user.name}
        </div>
    );
};

export {User};