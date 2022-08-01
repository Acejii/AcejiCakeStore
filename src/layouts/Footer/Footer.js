import React from "react";

import {
  FaHome,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Footer.scss";
function Footer() {
  return (
    <div className="text-white px-10 pt-[50px] pb-[20px] footer-background">
      <div className="flex relative z-[2]">
        {/* About us */}
        <div className="w-1/4">
          <h2 className="footer-title ml-1">LIÊN HỆ</h2>
          <div className="flex items-start mt-5">
            <div className="w-4 h-4">
              <FaHome className="" />
            </div>
            <p className="ml-2">
              796/167 Lê Đức Thọ, Phường 15, Quận Gò Vấp, TP.Hồ Chí Minh
            </p>
          </div>
          <div className="flex items-center mt-3">
            <div className="w-4 h-4">
              <AiFillPhone />
            </div>
            <a className="ml-2" href="tel:+0999999999">
              0999 999 999
            </a>
          </div>
          <div className="flex items-center mt-3">
            <div className="w-4 h-4">
              <AiFillMail />
            </div>
            <a className="ml-2" href="mailto:teishe110@gmail.com">
              info@acejiunity.vn
            </a>
          </div>

          {/* Social media */}
          <div className="flex mt-6">
            <a href="#" className="mr-2 hover:text-button">
              <FaFacebook size="24px" />
            </a>
            <a href="#" className="mr-2 hover:text-button">
              <FaInstagram size="24px" />
            </a>
            <a href="#" className="mr-2 hover:text-button">
              <FaTiktok size="24px" />
            </a>
            <a href="#" className="mr-2 hover:text-button">
              <FaTwitter size="24px" />
            </a>
            <a href="#" className="hover:text-button">
              <FaYoutube size="24px" />
            </a>
          </div>
        </div>

        {/* policies */}
        <div className="w-1/4">
          <h2 className="footer-title">CHÍNH SÁCH</h2>
          <div className="flex flex-col">
            <Link className="mt-5 hover:text-button" to="/">
              Chính sách và quy định chung
            </Link>
            <Link className="mt-3 hover:text-button" to="/">
              Chính sách giao dịch, thanh toán
            </Link>
            <Link className="mt-3 hover:text-button" to="/">
              Chính sách đổi trả
            </Link>
            <Link className="mt-3 hover:text-button" to="/">
              Chính sách bảo mật
            </Link>
            <Link className="mt-3 hover:text-button" to="/">
              Chính sách vận chuyển
            </Link>
          </div>
        </div>

        {/* more products */}
        <div className="flex flex-col w-1/4">
          <h2 className="footer-title">SẢN PHẨM</h2>
          <Link className="mt-5 hover:text-button" to="/">
            Bánh sinh nhật
          </Link>
          <Link className="mt-3 hover:text-button" to="/">
            Bánh Cookies
          </Link>
          <Link className="mt-3 hover:text-button" to="/">
            Bánh Brownie
          </Link>
          <Link className="mt-3 hover:text-button" to="/">
            Bánh Cupcake & Minicake
          </Link>
        </div>

        {/* subcribe */}
        <div className="w-1/4">
          <h2 className="footer-title">THEO DÕI CHÚNG TÔI</h2>
          <p className="mt-5">
            Đăng ký để được giảm giá 10% cho đơn hàng đầu tiên của bạn và nhận
            những thông báo mới nhất về khuyến mãi, chiết khấu và sản phẩm mới
          </p>
          <div className="mt-4 w-[250px] h-[30px] flex items-center border-b border-b-white">
            <input
              className="w-full h-full pl-2 bg-transparent"
              type="text"
              placeholder="Nhập email của bạn"
            />
            <button className="flex ml-2 hover:text-button">
              <FiSend size="24px" />
            </button>
          </div>
          <div className="mt-4">
            <img
              src="https://theme.hstatic.net/1000313040/1000406925/14/hg_img_thumb1.png?v=1851"
              alt="bct"
              width="60%"
            />
          </div>
        </div>
      </div>
      {/* copy rights */}
      <div className="text-center relative z-[2]">
        <hr className="mt-[100px] w-[80%] m-auto" />
        <p className="mt-2">Copyrights © 2022 by Aceji Bakery.</p>
      </div>
    </div>
  );
}

export default Footer;
