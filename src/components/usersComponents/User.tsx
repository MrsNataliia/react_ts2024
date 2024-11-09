import React, {FC} from 'react';

import {IUser} from "../../models/IUser";
import styles from './user.module.css'


interface IProps {
    user: IUser
}

const User: FC <IProps> = ({user}) => {
    return (
        <div className={styles.main}>
            <h2 className={styles.h2}> {user.name}</h2>
            <p><u>user name:</u> <b>{user.username}</b></p>
            <p><u>email:</u> <b>{user.email}</b></p>
        </div>
    );
};

export {User};