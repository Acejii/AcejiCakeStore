import React, { useEffect, useState } from "react";
import { FaUserAlt, FaLock, FaSpinner } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import axios from "axios";
function Login({ setLogin, setOpened, setSuccessLoginAlert, setLogedIn }) {
  const [isShowLoginPassword, setShowLoginPassword] = useState(false);
  const [isShowUserNameMessage, setShowUserNameMessage] = useState(false);
  const [isShowPasswordMessage, setShowPasswordMessage] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://62ab2d92bd0e5d29af09f19a.mockapi.io/users"
      );
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });

    // Enter để đăng nhập
    e.target.addEventListener("keypress", (e) => {
      if (e.key !== "Enter") {
        return;
      }
      handleLogIn();
    });
  };

  const handleLogIn = async () => {
    // loading
    setLoading(true);

    // Check tài khoản có trong api ko
    await setTimeout(() => {
      const index = users.findIndex(
        (user) => user.username === loginUser.username
      );
      if (index === -1) {
        setShowUserNameMessage(true);
      } else if (index !== -1) {
        const password = users[index].password;
        if (password !== loginUser.password) {
          setShowUserNameMessage(false);
          setShowPasswordMessage(true);
        } else {
          setShowPasswordMessage(false);
          setSuccessLoginAlert(true);
          setOpened(false);
          setLogedIn(true);
        }
      }
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      {/* main */}

      <div className="w-[90%] m-auto">
        {/* username */}
        <div className="form-control">
          <input
            type="text"
            name="username"
            id="username"
            className="w-full pl-10 leading-[36px]"
            placeholder="Tên đăng nhập"
            spellCheck={false}
            value={loginUser.username}
            onChange={handleChangeInput}
          />
          <label htmlFor="username" className="user-form-icon">
            <FaUserAlt size={18} />
          </label>
        </div>

        {/*Username Message  */}
        {isShowUserNameMessage && (
          <div className="w-full m-auto mt-1 flex items-center text-red-600">
            <CgDanger />
            <p className="text-14 ml-1">Tên đăng nhập không tồn tại!</p>
          </div>
        )}
        {/* password */}
        <div className="form-control">
          <input
            type={isShowLoginPassword ? "text" : "password"}
            name="password"
            id="password"
            className="w-full pl-10 leading-[36px]"
            placeholder="Mật khẩu"
            spellCheck={false}
            value={loginUser.password}
            onChange={handleChangeInput}
          />
          <label htmlFor="password" className="user-form-icon">
            <FaLock size={18} />
          </label>
          <div
            className="password-eye-icon cursor-pointer"
            onClick={() => setShowLoginPassword(!isShowLoginPassword)}
          >
            {isShowLoginPassword ? (
              <AiFillEyeInvisible size={18} />
            ) : (
              <AiFillEye size={18} />
            )}
          </div>
        </div>
        {/* password message */}
        {isShowPasswordMessage && (
          <div className="w-full m-auto mt-1 flex items-center text-red-600">
            <CgDanger />
            <p className="text-14 ml-1">Sai mật khẩu, vui lòng thử lại</p>
          </div>
        )}

        <div className="flex justify-between mt-3">
          <div className="flex items-center">
            <input type="checkbox" />
            <span className="text-14 ml-2">Ghi nhớ tài khoản</span>
          </div>
          <div>
            <button className="text-14 hover:opacity-80">Quên mật khẩu?</button>
          </div>
        </div>
        <div className="text-center">
          <button
            className={`text-16 text-white font-bold px-[70px] py-3 bg-green-600 mt-4 rounded-md hover:bg-green-400 ${
              isLoading ? "customDisable" : ""
            }`}
            onClick={handleLogIn}
          >
            ĐĂNG NHẬP
          </button>
        </div>
      </div>
      {/* footer */}
      <div className="text-center mt-3">
        <h2 className="font-bold text-primary mb-3">OR</h2>

        <button className="w-[90%] m-auto flex justify-center items-center py-3 bg-[#0675e8] rounded-xl hover:bg-blue-800">
          <GrFacebook size={20} className="mr-3" />
          <span className="text-center text-white">
            Đăng nhập bằng Facebook
          </span>
        </button>

        <div className="text-14 flex justify-center mt-3">
          <p>Bạn chưa có tài khoản?</p>
          <button
            className="text-purple-900 font-semibold pl-2 mb-5 hover:text-purple-700"
            onClick={() => setLogin(false)}
          >
            Đăng ký ngay
          </button>
        </div>
        {/* Loading */}
        <div className="h-6 flex justify-center">
          {isLoading && <FaSpinner size={24} className="loading" />}
        </div>
      </div>
    </>
  );
}

export default Login;
