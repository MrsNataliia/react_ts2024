import React, {FC, useEffect, useState} from 'react';
import { Product} from "../product/Product";
import {IProductProps} from "../../models/product";



const Products: FC = () => {

    const [products, setProducts] = useState<IProductProps[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products})=>{
                setProducts(products);
            });
    }, []);

    return (
        <div>
            {products.map((value: IProductProps)=>(<Product key ={value.id}
                                                            id={value.id}
                                                            title={value.title}
                                                            description={value.description}
                                                            category={value.category}
                                                            price={value.price}
                                                            brand={value.brand}
                                                            images={value.images}/>
            ))}
        </div>
    );
};

export {Products};