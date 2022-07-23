import React from "react";
import { FaRegCommentDots, FaUserAlt } from "react-icons/fa";
function NewsItem() {
  return (
    <div className="overflow-hidden h-[500px]">
      {/* img */}
      <div className="item-hover">
        <img src="/img/news-1.png" alt="news" />
      </div>

      {/* title */}
      <div className="px-2 pt-5">
        <a href="https://zingnews.vn" className="text-18 font-extrabold">
          TRI ÂN NGÀY NHÀ GIÁO VIỆT NAM 20/11
        </a>
        <div className="flex justify-around mt-3 font-semibold text-[#00a887]">
          <div className="flex items-center">
            <FaRegCommentDots size="15px" />
            <p className="text-16 ml-1">0 bình luận</p>
          </div>
          <div className="flex items-center">
            <FaUserAlt size="15px" />
            <p className=" text-16 ml-1">Lã Hoàng Thư</p>
          </div>
        </div>
      </div>
      {/* Content */}
      <p className="text-14 text-justify p-3">
        Tháng 12 đến ai ai cũng nghĩ đến ngày lễ Giáng Sinh, ông già noel, cây
        thông hay những hộp quà nhỏ xinh.Ngoài ý nghĩa theo đạo Thiên Chúa, Noel
        là một ngày lễ gia đình, một ngà...
      </p>
    </div>
  );
}

export default NewsItem;
