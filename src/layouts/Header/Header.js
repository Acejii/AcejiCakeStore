import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSistrix,
  FaPhone,
  FaStore,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";

import "./Header.scss";
import images from "./../../assets/images/index";
import Popper from "../../utils/Popper/Popper";
import AccountModal from "../../utils/Modal/AccountModal/AccountModal";

// cakeList
const cakes = {
  birthday: [
    { item: "Gateaux Kem Tươi", path: "/" },
    { item: "Gateaux Kem Bơ", path: "/" },
    { item: "Bánh Mousse", path: "/" },
    { item: "Gateaux Mousse", path: "/" },
    { item: "Bánh Valentine - Trái Tim", path: "/" },
    { item: "Bánh Sinh Nhật Bé Trai", path: "/" },
    { item: "Bánh Sinh Nhật Bé Gái", path: "/" },
    { item: "Bánh Vẽ", path: "/" },
    { item: "Bánh In Ảnh", path: "/" },
    { item: "Bánh sự kiện theo yêu cầu", path: "/" },
  ],
  cokie: [
    { item: "Cookies", path: "/" },
    { item: "Mini Cake", path: "/" },
    { item: "Teabreak", path: "/" },
  ],
};
function Header() {
  const [isShowBirthdayBox, setShowBirthdayBox] = useState(false);
  const [isShowCokiesBox, setShowCokiesBox] = useState(false);

  return (
    <div className="px-[40px] bg-primary">
      {/* Info nav */}
      <div className="flex justify-between items-center">
        {/* Logo section*/}
        <div className="w-[60px] h-[60px] m-3 flex justify-start items-center hover:cursor-pointer">
          <Link to="/">
            <img src={images.logo} alt="logo" width="100%" />
          </Link>
        </div>

        {/* info section */}
        <div className="flex flex-row">
          {/* Phone */}
          <a href="tel:+0999999999" className="header-item">
            <FaPhone className="header-icons" />
            <span className="pl-[8px] text-white font-[500] hover:text-button">
              0999 999 999
            </span>
          </a>

          {/* Branch */}
          <div className="header-item">
            <FaStore className="header-icons" />
            <Link
              to="/"
              className="pl-[8px] text-white font-[500] hover:text-button"
            >
              Hệ thống cửa hàng
            </Link>
          </div>

          {/* Account */}
          <div className="header-item">
            <AccountModal />
          </div>

          {/* Cart */}
          <div className="header-item relative">
            <FaShoppingCart className="header-icons" />
            <span className="pl-[8px] text-white font-[500] hover:text-button">
              Giỏ hàng
            </span>
            <h5 className="absolute top-[-5px] left-[48px] w-[20px] h-[20px] rounded-full bg-red-500 flex justify-center items-center text-white">
              5
            </h5>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="px-10 leading-7 flex justify-between items-center">
        {/* navigation */}
        <nav className="main-nav flex py-2">
          <Link to="/" className="nav-item">
            <h2 className="hover:text-button">TRANG CHỦ</h2>
          </Link>
          <Link
            to="/collections"
            className="nav-item relative"
            onMouseOver={() => setShowBirthdayBox(true)}
            onMouseLeave={() => setShowBirthdayBox(false)}
          >
            <h2 className="hover:text-button">BÁNH SINH NHẬT</h2>
            {isShowBirthdayBox && <Popper cakes={cakes.birthday} />}
          </Link>
          <Link to="/collections" className="nav-item">
            <h2>BÁNH MỲ</h2>
          </Link>
          <Link to="/collections" className="nav-item">
            <h2 className="hover:text-button">BÁNH MẶN</h2>
          </Link>
          <Link
            to="/collections"
            className="nav-item relative"
            onMouseOver={() => setShowCokiesBox(true)}
            onMouseOut={() => setShowCokiesBox(false)}
          >
            <h2 className="hover:text-button">COOKIES & MINICAKE</h2>
            {isShowCokiesBox && <Popper cakes={cakes.cokie} />}
          </Link>
        </nav>

        {/* Search */}
        <div className="flex w-[250px] h-[28px] relative">
          <input
            className="w-full h-full pl-2"
            type="text"
            placeholder="Tìm kiếm..."
          />
          <button className="absolute top-1/2 right-0 translate-y-[-50%] w-[30px] h-full flex justify-center items-center">
            <FaSistrix size="20px" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
