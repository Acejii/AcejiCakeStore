import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./NewsList.scss";
// import required modules
import { Pagination, Autoplay } from "swiper";
import NewsItem from "../NewsItem/NewsItem";

function NewsList() {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://62ab2d92bd0e5d29af09f19a.mockapi.io/article"
      );
      // get thanh cong
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-10">
      {news.length > 0 ? (
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
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h2>Nothing here</h2>
      )}
    </div>
  );
}

export default NewsList;
