import React, { Component } from 'react';

class ProductCarousel extends Component {

    componentDidMount() {
        console.log('Carousel Div', this.carousel);

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


        rturn (
            <div ref={(element) => this.carousel = element} className="carousel">
                {items}
            </div>
        );
    }
}

export default ProductCarousel;