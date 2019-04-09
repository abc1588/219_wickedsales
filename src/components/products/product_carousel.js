import React, { Component } from 'react';

class ProductCarousel extends Component {

    componentDidMount() {
        console.log('Carousel Div', this.carousel);

        const config = {
          //numVisible: 1,
          indicators: true,
          fullWidth: true
        };

        M.Carousel.init(this.carousel, config);
    }

    render(){
        console.log('Props:', this.props);

        const items = this.props.images.map((img) => {
            return(
                <a key={img} className="carousel-item" href="#">
                    <img src={`/dist/${img}`} alt="Product Image"/>
                </a>
            )
        });


        return (
            <div ref={(element) => this.carousel = element} className="col s12 m4 carousel=slider">
                {items}
            </div>
        );
    }
}

export default ProductCarousel;