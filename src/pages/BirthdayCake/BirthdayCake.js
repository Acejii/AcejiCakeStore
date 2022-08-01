import React from "react";
import Header from "../../layouts/Header/Header";
import Banner from "../../layouts/Banner/Banner";
import CakeTypeDetails from "../CakeTypeDetails/CakeTypeDetails";
import Footer from "../../layouts/Footer/Footer";

function BirthdayCake() {
  return (
    <>
      <Header />
      <Banner title="Bánh sinh nhật" />
      <CakeTypeDetails type="birthdaycake" />
      <Footer />
    </>
  );
}

export default BirthdayCake;
