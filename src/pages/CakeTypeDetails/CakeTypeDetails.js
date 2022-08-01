import React from "react";
import Popper from "../../utils/Popper/Popper";
import CakeItem from "../../layouts/Content/CakeItem/CakeItem";

function CakeTypeDetails({ type }) {
  return (
    <div className="py-[50px] px-[30px] bg-secondary">
      {/* title */}
      <div className="text-center">
        <h2 className="text-[28px] font-bold text-primary">
          {type.toUpperCase()}
        </h2>
      </div>

      {/* main */}
      <div className="flex relative">
        {/* sidebar */}
        <aside className="sidebar-custom mt-[68px] w-1/4 h-fit mr-2 border-t-yellow-900 rounded-[10px] overflow-hidden shadow-md">
          <h2 className="text-[20px] text-white font-bold bg-primary py-3 pl-4">
            DANH MỤC MENU
          </h2>
          <div className="py-5 pl-3 bg-white">
            <Popper type={type} />
          </div>
        </aside>

        {/* product list*/}
        <div className="w-3/4 ml-2">
          <CakeItem type={type} />
        </div>
      </div>
    </div>
  );
}

export default CakeTypeDetails;
