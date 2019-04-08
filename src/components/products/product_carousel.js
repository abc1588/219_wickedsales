import React, { Component } from 'react';

class ProductCarousel extends Component {

    componentDidMount() {
        console.log('Carousel Div', this.carousel);

        const config = {
          //numVisible: 1,
          indicators: true,
          fullWidth: true
        };

        M.Carousel.init(this.carousel);
    }

    render(){
        console.log('Props:', this.props);

        const items = this.props.images.map((img) => {
            return(
                <a key={img} className="carousel-tiem" href="#">
                    <img src={`/dist/${img}`} alt="Product Image"/>
                </a>
            )
        });


        return (
            <div ref={(element) => this.carousel = element} className="col s12 m8 carousel">
                {items}
            </div>
        );
    }
}

export default ProductCarousel;