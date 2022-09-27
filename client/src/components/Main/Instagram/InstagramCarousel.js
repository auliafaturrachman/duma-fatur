import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import InstagramCarouselItem from "./InstagramCarouselItem";

import 'swiper/scss';
import 'swiper/scss/navigation';

const InstagramCarousel = () => {
  const items = [];

  for (let i = 1; i < 15; i++) {
    items.push(<InstagramCarouselItem item={`Instagram_${i}`} />)    
  }

  return (
    <div className="instagram-carousel-wrapper">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        slidesPerGroup={3}
        grabCursor={true}
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {items.map((item, i) => {
          return <SwiperSlide key={i}>{item}</SwiperSlide>
        })}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>

  )
}

export default InstagramCarousel