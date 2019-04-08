import React from 'react';
import { formatMoney } from '../../helpers';

export default ({name, price, id, images: [ productImg = '' ], goToDetails}) => {
    
    return (
        <li className="collection-item avatar product-item" onClick={()=> { goToDetails(id)}}>
            <img className="circle" src={`/dist/${productImg}`} alt={`${name} product image`}/>
            <span className="title">{name}</span>
            <p>{formatMoney(price)}</p>
        </li>
    );
}

