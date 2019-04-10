import React, { Component } from 'react';
import axios from 'axios';
import ProductAdd from './product_add';
import ProductCarousel from './product_carousel';
import MiscDetails from './misc_details';
import { formatMoney } from '../../helpers';


class ProductDetails extends Component {
    state = {
        details: null
    }

    componentDidMount() {
        this.getDetails();
    }

    async getDetails(){
        const { params } = this.props.match;
        // Call server to get product details

        const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);

        console.log('Details Resp', resp);
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
        const { params } = this.props.match;

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
                        <ProductAdd productId={params.product_id}/>
                        <p>{description}</p>
                        <MiscDetails details={miscDetails}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProductDetails;

