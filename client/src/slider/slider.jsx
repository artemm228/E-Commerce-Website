import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";

const SliderComponent = ({ images, name }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div className='card' key={index}>
                    <img className='card-image' src={image} alt={name} />
                </div>
            ))}
        </Slider>
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick} />
    );
};

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className}  onClick={onClick} />
    );
};


export default SliderComponent;