import React from 'react';
import {Link} from "react-router-dom";

import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.link}>
                    <Link to='/users'>users</Link>
                </div>
                <div>
                    <Link to='posts'>posts</Link>
                </div>
                <div>
                    <Link to='/comments'>comments</Link>
                </div>
                <div>
                    <Link to='/postComments'>posts with comments</Link>
                </div>
            </div>
        </div>
    );
};

export {Header};