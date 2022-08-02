import CakeItem from "../CakeItem/CakeItem";

function CakeList() {
  return (
    <>
      <CakeItem type="popular" title="Phổ biến" />
      <CakeItem type="bestseller" title="Bán chạy" />
    </>
  );
}

export default CakeList;
