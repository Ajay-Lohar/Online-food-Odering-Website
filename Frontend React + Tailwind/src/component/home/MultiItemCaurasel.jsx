import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeels } from './TopMeal';
import CaroselItem from './CaroselItem';

const MultiItemCaurasel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    arrows:false
  };
  return (
    <div>
      <Slider {...settings}>
        {topMeels.map((item)=>(<CaroselItem image={item.image}  title={item.title} />))}

      </Slider>

    </div>
  )
}

export default MultiItemCaurasel