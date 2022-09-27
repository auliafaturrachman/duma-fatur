import React from "react"
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PickCarouselItem from "./PickCarouselItem";

import 'swiper/scss';
import 'swiper/scss/navigation';

const PickCarousel = () => {
  const datas = [
    {
      "image1": "Pick_1_1_800x",
      "image2": "Pick_1_2_800x",
      "itemLabel": false,
      "name": "Calya Cardigan Grey",
      "price": "Rp 625,000",
      "color": "Grey",
      "backToStock": true,
    },
    {
      "image1": "Pick_2_1_800x",
      "image2": "Pick_2_2_800x",
      "itemLabel": true,
      "name": "Darie Top White",
      "price": "Rp 525,000",
      "color": "White",
      "backToStock": true,
    },
    {
      "image1": "Pick_3_1_800x",
      "image2": "Pick_3_2_800x",
      "itemLabel": false,
      "name": "Petra Shorts Grey",
      "price": "Rp 450,000",
      "color": "Grey",
      "backToStock": true,
    },
    {
      "image1": "Pick_4_1_800x",
      "image2": "Pick_4_2_800x",
      "itemLabel": false,
      "name": "Leya Pants Black",
      "price": "Rp 495,000",
      "color": "Black",
      "backToStock": false,
    },
    {
      "image1": "Pick_5_1_800x",
      "image2": "Pick_5_2_800x",
      "itemLabel": false,
      "name": "Dayley Top White",
      "price": "Rp 550,000",
      "color": "White",
      "backToStock": true,
    },
    {
      "image1": "Pick_6_1_800x",
      "image2": "Pick_6_2_800x",
      "itemLabel": false,
      "name": "Acra Top Blue",
      "price": "Rp 525,000",
      "color": "Light Blue",
      "backToStock": false,
    },
    {
      "image1": "Pick_7_1_800x",
      "image2": "Pick_7_2_800x",
      "itemLabel": false,
      "name": "Toja Pants White",
      "price": "Rp 650,000",
      "color": "White",
      "backToStock": false,
    },
    {
      "image1": "Pick_8_1_800x",
      "image2": "Pick_8_2_800x",
      "itemLabel": false,
      "name": "Arlet Top Blue",
      "price": "Rp 550,000",
      "color": "#80BEE4",
      "backToStock": true,
    },
  ];

  return (
    <div className="pick-carousel-wrapper">
      <Swiper
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        modules={[Navigation]}
        grabCursor={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {datas.map((data, i) => {
          return (
            <SwiperSlide key={i}>
              <PickCarouselItem data={data}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  )
}

export default PickCarousel