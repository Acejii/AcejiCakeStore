import React from "react";
import Header from "../../layouts/Header/Header";
import Banner from "../../layouts/Banner/Banner";
import CakeTypeDetails from "../CakeTypeDetails/CakeTypeDetails";
import Footer from "../../layouts/Footer/Footer";

function Cupcake() {
  return (
    <>
      <Header />
      <Banner title="Bánh Cupcake" />
      <CakeTypeDetails type="cupcake" />
      <Footer />
    </>
  );
}

export default Cupcake;
