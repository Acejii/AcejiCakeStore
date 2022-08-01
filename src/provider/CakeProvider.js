import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const cakeLists = [
  { type: "popular", title: "Phổ biến" },
  { type: "bestseller", title: "Bán chạy" },
];

const CakeContext = createContext();

function CakeProvider({ children }) {
  const [cakes, setCakes] = useState([]);
  const [carts, setCarts] = useState([]);

  const handleAddtoCart = (cake) => {
    const index = carts.findIndex((cart) => cart.id === cake.id);
    if (index === -1) {
      setCarts([...carts, { ...cake, quantity: 1 }]);
    } else {
      carts[index].quantity += 1;
    }
  };

  const handleChangeCartQuantity = (carts) => {
    setCarts(carts);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://62ab2d92bd0e5d29af09f19a.mockapi.io/cake"
      );
      setCakes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    cakeLists,
    cakes,
    handleAddtoCart,
    carts,
    handleChangeCartQuantity,
    setCarts,
  };
  return <CakeContext.Provider value={value}>{children}</CakeContext.Provider>;
}

export { CakeContext, CakeProvider };
