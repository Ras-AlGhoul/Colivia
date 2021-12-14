import React from 'react';
import { Product } from '../utils/types';
import Card from './Card';

//not using interface
const Products = ({ items }: { items: Product[] }) => {
    return (
        <div className='products'>
            {items?.map((i, index) =>
                <Card
                    key={index}
                    item={i.item}
                    price={i.price}
                    description={i.description}
                    contact={i.contact}
                    location={i.location}
                    category={i.category}
                    imageUrl={i.imageUrl} />).reverse()}
        </div>
    )
};

export default Products;
