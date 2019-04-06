import React from 'react';
import { Route } from 'react-router-dom';
import ProductList from './product_list';
import ProductDetails from './product_details';
import './products.scss';

export default props => {

    return (
        <div className="products">
            <Route path="/products" exact component={ProductList}/>
            <Route path="/products/:product_id" component={ProductDetails}/>
        </div>
    );
}
