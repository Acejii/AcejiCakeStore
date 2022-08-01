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
    <div>
      <Swiper
        speed={1000}
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aceji-cake-store.appspot.com/o/carousel-1.png?alt=media&token=6fc9e436-2551-4ccd-a4ae-d954ad45f3f9"
            alt="carousel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aceji-cake-store.appspot.com/o/carousel-2.png?alt=media&token=0b24f3a6-5644-45cf-aa80-a8f3ef870320"
            alt="carousel"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
