import React from "react";
import Header from "../../layouts/Header/Header";
import Banner from "../../layouts/Banner/Banner";
import CakeTypeDetails from "../CakeTypeDetails/CakeTypeDetails";
import Footer from "../../layouts/Footer/Footer";

function Brownie() {
  return (
    <>
      <Header />
      <Banner title="Bánh brownie" />
      <CakeTypeDetails type="brownie" title="Bánh Brownie" />
      <Footer />
    </>
  );
}

export default Brownie;
