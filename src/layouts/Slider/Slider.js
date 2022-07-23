import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Autoplay, Pagination } from "swiper";

import "./Slider.scss";

function Slider() {
  return (
    <div className="h-[450px]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/aceji-cake-store.appspot.com/o/carousel-1.png?alt=media&token=aab448a6-52aa-4b7d-ae65-c5c84d193060" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/carousel-2.png" alt="carousel" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
