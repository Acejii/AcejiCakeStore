import React from "react";
import "./Home.scss";

import Header from "../../layouts/Header/Header";
import Slider from "../../layouts/Slider/Slider";
import Content from "../../layouts/Content/Content";
import Footer from "../../layouts/Footer/Footer";
function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
