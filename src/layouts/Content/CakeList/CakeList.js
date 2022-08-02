import CakeItem from "../CakeItem/CakeItem";

function CakeList() {
  return (
    <div className="w-[1280px] m-auto pl-6 pr-[39px]">
      <CakeItem type="popular" title="Phổ biến" />
      <CakeItem type="bestseller" title="Bán chạy" />
    </div>
  );
}

export default CakeList;
