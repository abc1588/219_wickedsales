import React from 'react';
import {formatMoney} from '../../helpers';

//console.log('formatMoney: ', formatMoney('asfd'));



export default ({name, price, image: [productImg = '' ]}) => {

    return (
        <li className="collection-item avatar">
            <img className="circle" src={`/dist/${productImg}`} alt={`${name} product image`}/>
            <span className="title">{name}</span>
            {/*<p>${(props.price/100).toFixed(2)}</p>*/}
            <p>{formatMoney(price)}</p>
        </li>
    );
}