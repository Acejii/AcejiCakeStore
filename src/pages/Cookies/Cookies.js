import React from "react";
import Header from "../../layouts/Header/Header";
import Banner from "../../layouts/Banner/Banner";
import CakeTypeDetails from "../CakeTypeDetails/CakeTypeDetails";
import Footer from "../../layouts/Footer/Footer";

function Cookies() {
  return (
    <>
      <Header />
      <Banner title="Bánh Cookies" />
      <CakeTypeDetails type="cookies" title="Bánh Cookies" />
      <Footer />
    </>
  );
}

export default Cookies;
