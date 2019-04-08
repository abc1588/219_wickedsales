import React, { Component } from 'react';
import axios from 'axios';

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

        const {description = 'No description available', name} = details;

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <p>{description}</p>
            </div>
        );

    }
}

export default ProductDetails;
