import React, {FC} from 'react';

import {IUser} from "../../models/IUserModel";
import styles from './User.module.css'

interface IProp {
    user: IUser
}

type IPropType =IProp & {postsByUser?: (userId: number)=>void};

const UserComponent: FC <IPropType> = ({user, postsByUser}) => {

    const onclickHandler =()=>{
        if (postsByUser){
            postsByUser(user.id)
        }
    }

    return (
        <div className={styles.main}>

                <div className={styles.user}>

                    <div className={styles.img}>
                        <img  src={user.image} alt={user.username}/>
                    </div>

                    <div className={styles.userName}>
                        <h2 className={styles.h2}>{user.firstName} {user.lastName}</h2>
                        <p><u>user name:</u> <b>{user.username}</b></p>
                        <ul>
                            <li>age: {user.age}</li>
                            <li>email: {user.email}</li>
                            <li>gender: {user.gender}</li>
                        </ul>

                        <button onClick={onclickHandler} className={styles.button}>posts by {user.firstName}</button>

                    </div>
                </div>
        </div>
    );
};

export {UserComponent};