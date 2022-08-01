import React, { useContext } from "react";
import { BiCake } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { CakeContext } from "../../../provider/CakeProvider";

function CakeItem({ type, title = "" }) {
  const context = useContext(CakeContext);

  const newCakes = context.cakes.filter(
    (cake) => cake.status === type || cake.type === type
  );

  // Handle click cart to add cake into cart
  const handleClickCart = (cake) => {
    context.handleAddtoCart(cake);
  };

  return (
    <div>
      <div className="pt-[50px] pb-[25px]">
        {/* title */}
        {title !== "" && (
          <div className="flex flex-col items-center mb-[25px]">
            <h2 className="text-24 uppercase font-bold mb-1">{title}</h2>
            <BiCake size="24px" />
          </div>
        )}

        {/* items */}
        <div className="flex flex-wrap">
          {newCakes.map((cake) => (
            <div
              key={cake.cakeid}
              className={title === "" ? "w-1/3 p-4" : "w-1/4 p-4"}
            >
              <div className="bg-white min-h-[330px] relative rounded-[10px] overflow-hidden item-hover">
                <div className="h-[200px]">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h2 className="block text-16 font-bold uppercase mt-5 text-center">
                  {cake.name.toUpperCase()}
                </h2>
                <p className="text-13 mt-1 mb-[50px] text-center">
                  {cake.cakeid}
                </p>
                <div className="w-full absolute bottom-0 left-0 flex">
                  <button className="text-white text-18 font-bold px-2 py-2 bg-button rounded-tr-[10px] z-[1] hover:bg-green-500">
                    {cake.price.toLocaleString()} ₫
                  </button>

                  <button
                    className="px-[14px] py-2 bg-[#3d1a1a] text-white ml-[-7px] rounded-tr-[10px] hover:text-[#00a887] hover:opacity-80"
                    onClick={() => handleClickCart(cake)}
                  >
                    <FaShoppingCart size="16px" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* More button
        <div className="text-center">
          <button className="text-14 font-bold px-4 py-3 mt-3 text-white bg-black rounded-[10px] hover:bg-button">
            XEM THÊM
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default CakeItem;
