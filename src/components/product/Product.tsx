import React, {FC} from 'react';

import styles from './Product.module.css'
import {IProductProps} from "../../models/product";

const Product: FC <IProductProps>= ({id,
                                            title,
                                            description,
                                            category,
                                            price,
                                            brand,
                                            images}) => {
    return (
        <div>
            <div className={styles.main}>

               <h2 className={styles.title}>{id} - {title}</h2>
                <h4 className={styles.h4}><u>Category</u>:{category} </h4>
                <h4 className={styles.h4}><u>Brand</u>:{brand}</h4>

               <div className={styles.picture}>
                   {images.map((image, index)=> <img className={styles.img} key={index} src={image} alt={title}/>)}
               </div>
                <p className={styles.price}>Price: {price}</p>
                <p className={styles.text}> {description} </p>

            </div>


        </div>
    );
};

export {Product};