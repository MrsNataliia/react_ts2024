import React, {FC} from 'react';

import {IUser} from "../models/IUser";
import styles from './User.module.css'


interface IProps{
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    return (
        <div>
            <div className={styles.user}>
                <ul>
                    <li>
                        {user.id}: {user.firstName} {user.lastName}
                    </li>

                </ul>


            </div>

        </div>
    );
};

export {User};