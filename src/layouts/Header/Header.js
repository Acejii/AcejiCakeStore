import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSistrix, FaPhone, FaStore } from "react-icons/fa";

import "./Header.scss";
import images from "./../../assets/images/index";
import Popper from "../../utils/Popper/Popper";
import AccountModal from "../../utils/Modal/AccountModal/AccountModal";
import CartModal from "../../utils/Modal/CartModal/CartModal";
import SuccessAlert from "../../utils/Alert/SuccessAlert";
function Header() {
  const [isShowBirthdayBox, setShowBirthdayBox] = useState(false);
  const [isShowCokiesBox, setShowCokiesBox] = useState(false);
  const [isSuccessRegisterAlert, setSuccessRegisterAlert] = useState(false);
  const [isSuccessLoginAlert, setSuccessLoginAlert] = useState(false);
  return (
    <div className="bg-primary w-full">
      <div className="px-[40px] w-[1280px] m-auto">
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
              <span className="pl-[8px] text-dark font-[500] hover:text-button">
                0999 999 999
              </span>
            </a>

            {/* Branch */}
            <div className="header-item">
              <FaStore className="header-icons" />
              <Link
                to="/"
                className="pl-[8px] text-dark font-[500] hover:text-button"
              >
                Hệ thống cửa hàng
              </Link>
            </div>

            {/* Account */}
            <div className="header-item">
              <AccountModal
                setSuccessRegisterAlert={setSuccessRegisterAlert}
                setSuccessLoginAlert={setSuccessLoginAlert}
              />
            </div>

            {/* Cart */}
            <div className="header-item relative">
              <CartModal />
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="px-10 leading-7 flex justify-between items-center">
          {/* navigation */}
          <nav className="main-nav flex py-2">
            <div className="nav-item">
              <NavLink to="/" className="navlink">
                <h2 className="hover:text-button">TRANG CHỦ</h2>
              </NavLink>
            </div>
            <div
              className="nav-item relative"
              onMouseOver={() => setShowBirthdayBox(true)}
              onMouseLeave={() => setShowBirthdayBox(false)}
            >
              <NavLink to="/birthdaycake" className="navlink">
                <h2 className="hover:text-button">BÁNH SINH NHẬT</h2>
              </NavLink>
              {isShowBirthdayBox && (
                <div className="min-w-[200px] p-3 absolute z-30 top-[30px] left-0 bg-primary">
                  <Popper type="birthdaycake" />
                </div>
              )}
            </div>

            <div className="nav-item">
              <NavLink to="/cookies" className="navlink">
                <h2 className="hover:text-button">BÁNH COOKIES</h2>
              </NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/brownie" className="navlink">
                <h2 className="hover:text-button">BÁNH BROWNIE</h2>
              </NavLink>
            </div>

            <div
              className="nav-item relative"
              onMouseOver={() => setShowCokiesBox(true)}
              onMouseOut={() => setShowCokiesBox(false)}
            >
              <NavLink to="/cupcake" className="navlink">
                <h2 className="hover:text-button">CUPCAKE</h2>
              </NavLink>

              {isShowCokiesBox && (
                <div className="min-w-[200px] p-3 absolute z-30 top-[30px] left-0 bg-primary">
                  <Popper type="cupcake" />
                </div>
              )}
            </div>
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

        {isSuccessRegisterAlert && (
          <SuccessAlert message="Đăng ký thành công !" />
        )}
        {isSuccessLoginAlert && <SuccessAlert message="Đăng nhập thành công" />}
      </div>
    </div>
  );
}

export default Header;
