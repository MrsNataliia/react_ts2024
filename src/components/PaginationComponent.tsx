import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import styles from './Pagination.module.css'


type PaginationProps = {flag: boolean}

const PaginationComponent: FC <PaginationProps> = ({flag} ) => {

    const  [query, setQuery] = useSearchParams({page: '1'});


    const onclickNext = ()=>{
        const page = query.get('page');
        if (page){
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()})
        }

    }

    const onclickPrev = () =>{
        const page = query.get('page');
        if (page && +page>0){
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()})
        }

    }
    return (
        <div>
            <button onClick={onclickPrev} className={styles.button}>prev</button>
            <button onClick={onclickNext} disabled={flag} className={styles.button}>next</button>

        </div>
    );
};

export {PaginationComponent};