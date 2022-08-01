import { useState } from "react";
import { Modal } from "@mantine/core";
import { FaUserAlt } from "react-icons/fa";
import Login from "./Login";

import "./AccountModal.scss";
import Register from "./Register";
function AccountModal({ setSuccessRegisterAlert, setSuccessLoginAlert }) {
  const [opened, setOpened] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const [isLogedIn, setLogedIn] = useState(false);

  return (
    <>
      <Modal centered opened={opened} onClose={() => setOpened(false)}>
        {/* Modal content */}
        {/* title */}
        <h2 className="text-20 font-bold text-center mb-4">
          {isLogin ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}
        </h2>

        {/* main */}
        {isLogin ? (
          <Login
            setLogin={setLogin}
            setOpened={setOpened}
            setSuccessLoginAlert={setSuccessLoginAlert}
            setLogedIn={setLogedIn}
          />
        ) : (
          <Register
            setLogin={setLogin}
            setOpened={setOpened}
            setSuccessRegisterAlert={setSuccessRegisterAlert}
            setLogedIn={setLogedIn}
          />
        )}
      </Modal>
      <button
        className="flex justify-center items-center"
        onClick={() => {
          setOpened(true);
          setSuccessRegisterAlert(false);
          setSuccessLoginAlert(false);
        }}
      >
        <FaUserAlt className="header-icons" />
        <span className="text-left pl-[8px] text-dark font-[500] hover:text-button">
          {isLogedIn ? <p>Chào bạn !</p> : "Tài khoản"}
        </span>
      </button>
    </>
  );
}

export default AccountModal;
