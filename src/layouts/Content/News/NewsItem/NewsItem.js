import React from "react";
import { FaRegCommentDots, FaUserAlt } from "react-icons/fa";

function NewsItem({ item }) {
  return (
    <div className="overflow-hidden h-[500px] drop-shadow-md">
      {/* img */}
      <div className="item-hover h-[250px]">
        <img
          src={item.image}
          alt="news"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* title */}
      <div className="px-2 pt-5">
        <a
          href="https://zingnews.vn"
          className="text-18 font-extrabold block h-[50px]"
        >
          {item.name.toUpperCase()}
        </a>
        <div className="flex justify-around mt-3 font-semibold text-[#00a887]">
          <div className="flex items-center">
            <FaRegCommentDots size="15px" />
            <p className="text-16 ml-1">
              {Math.floor(Math.random() * 10000)} bình luận
            </p>
          </div>
          <div className="flex items-center">
            <FaUserAlt size="15px" />
            <p className=" text-16 ml-1">Lã Hoàng Thư</p>
          </div>
        </div>
      </div>
      {/* Content */}
      <p className="text-14 text-justify p-3">{item.content}</p>
    </div>
  );
}

export default NewsItem;
