import React from "react";
import NewsList from "./NewsList/NewsList";

function News() {
  return (
    <div className="w-[1280px] m-auto">
      <div className="py-[50px]">
        <div className="text-center mb-[50px]">
          <h2 className="text-24 font-extrabold text-[#00a887] mb-2">
            TIN TỨC
          </h2>
          <h3 className="text-20 font-semibold">NỔI BẬT NHẤT TRONG TUẦN</h3>
        </div>

        <div>
          <NewsList />
        </div>
      </div>
    </div>
  );
}

export default News;
