import React from "react";
import CakeItem from "../CakeItem/CakeItem";

function CakeList() {
  return (
    <div className="cake-wrapper px-6">
      <CakeItem />
      <CakeItem />
      <CakeItem />
    </div>
  );
}

export default CakeList;
