import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./NewsList.scss";
// import required modules
import { Pagination, Autoplay } from "swiper";
import NewsItem from "../NewsItem/NewsItem";

function NewsList() {
  return (
    <div className="px-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewsItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default NewsList;
