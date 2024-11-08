import React from 'react';
import {Link} from "react-router-dom";

import styles from './Header.module.css'


const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <div><Link to={'/'}>home</Link></div>
                <div><Link to={'/users'}>users</Link></div>
                <div><Link to={'/posts'}>posts</Link></div>
                <div><Link to={'/comments'}>comments</Link></div>
                <div><Link to={'/postComments'}>postWithComments</Link></div>

            </div>
        </div>
    );
};

export {Header};