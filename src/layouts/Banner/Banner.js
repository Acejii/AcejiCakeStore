import React from "react";
import "./Banner.scss";

function Banner({ title }) {
  return (
    <div className="banner-background">
      <h2 className="text-[32px] text-white font-extrabold z-[2]">
        {title.toUpperCase()}
      </h2>
    </div>
  );
}

export default Banner;
