import CakeItem from "../CakeItem/CakeItem";

function CakeList() {
  return (
    <div className="cake-wrapper px-6">
      <CakeItem type="popular" title="Phổ biến" />
      <CakeItem type="bestseller" title="Bán chạy" />
    </div>
  );
}

export default CakeList;
