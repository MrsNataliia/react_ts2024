import React, {FC} from 'react';
import {Link} from "react-router-dom";

import styles from "./Header.module.css"

const Header: FC = () => {

    return (
        <div>
            <div className={styles.header}>
                <div><Link to={'/'}>home</Link></div>
                <div><Link to={'/users'}>users</Link></div>

            </div>
        </div>
    );
};

export {Header};