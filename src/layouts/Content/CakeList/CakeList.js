import { useContext } from "react";
import CakeItem from "../CakeItem/CakeItem";
import { CakeContext } from "../../../provider/CakeProvider";

function CakeList() {
  const context = useContext(CakeContext);

  return (
    <div className="cake-wrapper px-6">
      <CakeItem type="popular" title="Phổ biến" />
      <CakeItem type="bestseller" title="Bán chạy" />
    </div>
  );
}

export default CakeList;
