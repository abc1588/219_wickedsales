import React, { Component } from 'react';
import axios from 'axios';
import ProductCarousel from './product_carousel';
import {formatMoney} from '../../helpers';
import MiscDetails from './misc_details';

class ProductDetails extends Component {
    state = {
        details: null
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.getDetails()
        // }, 3000);
        this.getDetails();
    }

    async getDetails(){
        const { params } = this.props.match;
        // Call server to get product details

        // console.log('Params:', params);
        // console.log('Fetch product with id of:', params.product_id);

        const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);

        // console.log('Details Resp', resp);

        if(resp.data.success) {
            this.setState({
                details: resp.data.productInfo
            });
        } else {
            this.setState({
                details: false
            });
        }
    }

    render(){
        console.log('Product Details:', this.state.details);
        const {details} = this.state;

        if(details === null){
            return <h1 className="center">Loading...</h1>
        } else if(!details){
            return <h1 className="center">Product Not Found</h1>
        }

        const {description = 'No description available', images, miscDetails, name, price} = details;

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <div className="row">
                    <ProductCarousel images={images}/>
                    <div className="col s12 m8">
                        <div className="right-align product-price">{formatMoney(price)}</div>
                        <div className="right-align add-to-cart">
                            <span className="qty-container">
                                <button className="btn btn-small btn-floating purple lighten-1">
                                    <i className="material-icons">remove</i>
                                </button>
                                <span className="product-qty">1</span>
                                <button className="btn btn-small btn-floating purple lighten-1">
                                    <i className="material-icons">add</i>
                                </button>
                            </span>

                            <button className="btn purple darken-2">
                                <i className="material-icons">add_shopping_cart</i>
                            </button>
                        </div>
                        <p>{description}</p>
                        <MiscDetails details={miscDetails}/>
                    </div>
                </div>
            </div>
        );
    }
}






export default ProductDetails;
