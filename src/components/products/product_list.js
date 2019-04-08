import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from './product_item';

class ProductList extends Component {
    constructor(props){
        super(props);
        products: [];
        this.goToDetails = this.goToDetails.bind(this);
    }

    componentDidMount(){
        this.getProducts();
    }

    goToDetails(id){
        console.log('Redirect to details, product id:', id);
        console.log('Props:', this.props);

        this.props.history.push(`/products/${id}`);
    }

    getProducts(){
        axios.get('/api/getproducts.php').then((resp) => {
            this.setState({
                products: resp.data.products
            });
        });
    }

    // render(){
    //     console.log('state', this.state)
    //     const productList = this.state.products.map((product) => {
    //         return <ProductItem key={product.id} {...product} goToDetails={this.goToDetails} />;
    //     });
    //
    //     return (
    //         <div className="product-list">
    //             <h1 className="center">Wicked Product List</h1>
    //             <ul className="collection">
    //                 {productList}
    //             </ul>
    //         </div>
    //     );
    // }

    render(){
        const productList = this.state.products.map((product) => {
            return <ProductItem key={product.id} {...product} goToDetails={this.goToDetails} />;
        });

        return (
            <div className="product-list">
                <h1 className="center">Wicked Product List</h1>
                <ul className="collection">
                    {productList}
                </ul>
            </div>
        );
    }
}

export default ProductList;

