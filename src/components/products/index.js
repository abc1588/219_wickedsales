import React from 'react';
import {Route} from 'react-router-dom';
import ProductList from './product_list';
import ProductDetails from './product_details';

export default props => {
    console.log ('Product Index Props:', props.match.path);
    return (
        <div>
            <Route exact path="/products" component={ProductList}/>
            <Route path="/products/:product_id" component={ProductDetails}/>
        </div>
    );
}