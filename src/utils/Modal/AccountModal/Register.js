import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { GrFacebook } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { useForm } from "react-hook-form";

function Register({
  setLogin,
  setOpened,
  setSuccessRegisterAlert,
  setLogedIn,
}) {
  const [users, setUsers] = useState([]);
  const [isShowPassword, setShowPassword] = useState(false);
  const [isShowPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isUserExist, setUserExist] = useState(false);
  const [isEmailExist, setEmailExist] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    // call api
    try {
      const { data } = await axios.get(
        "https://62ab2d92bd0e5d29af09f19a.mockapi.io/users"
      );
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post(
        "https://62ab2d92bd0e5d29af09f19a.mockapi.io/users",
        data
      );
      setLoading(false);
      setOpened(false);
      setSuccessRegisterAlert(true);
      setLogedIn(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] m-auto">
      {/* main */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex">
          {/* FirstName */}
          <div className="w-1/2">
            <div
              className={`form-control mr-1 ${
                errors.firstName ? "errorInput" : ""
              }`}
            >
              <input
                type="text"
                className="w-full pl-4 leading-[36px]"
                placeholder="Tên"
                spellCheck={false}
                {...register("firstName", {
                  required: "Không được để trống",
                  minLength: { value: 2, message: "Tối thiểu 2 ký tự" },
                  maxLength: { value: 8, message: "Tối đa 8 ký tự" },
                })}
              />
            </div>
            {errors.firstName && (
              <p className="errorMessage">{errors.firstName.message}</p>
            )}
          </div>

          {/* lastName */}
          <div className="w-1/2">
            <div
              className={`form-control ml-1 ${
                errors.lastName ? "errorInput" : ""
              }`}
            >
              <input
                type="text"
                className="w-full pl-4 leading-[36px]"
                placeholder="Họ"
                spellCheck={false}
                {...register("lastName", {
                  required: "Không được để trống",
                  minLength: { value: 2, message: "Tối thiểu 2 ký tự" },
                  maxLength: { value: 8, message: "Tối đa 8 ký tự" },
                })}
              />
            </div>
            {errors.lastName && (
              <p className="errorMessage">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* email */}
        <div className={`form-control ${errors.email ? "errorInput" : ""}`}>
          <input
            type="text"
            className="w-full pl-4 leading-[36px]"
            placeholder="Email"
            spellCheck={false}
            {...register("email", {
              required: "Không được để trống",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Email không hợp lệ",
              },
              onChange: (e) => {
                const { value } = e.target;
                // username Check exist
                const user = users.find((user) => user.email === value);
                if (user) {
                  setEmailExist(true);
                } else {
                  setEmailExist(false);
                }
              },
            })}
          />
        </div>
        {errors.email && <p className="errorMessage">{errors.email.message}</p>}
        {isEmailExist && <p className="errorMessage">Email đã tồn tại</p>}

        {/* username */}
        <div className={`form-control ${errors.username ? "errorInput" : ""}`}>
          <input
            type="text"
            className="w-full pl-4 leading-[36px]"
            placeholder="Tên đăng nhập"
            spellCheck={false}
            {...register("username", {
              required: "Không được để trống",
              pattern: {
                value: /^[a-zA-Z0-9.\-_$@*!]{3,30}$/,
                message: "Tên đăng nhập không hợp lệ",
              },
              onChange: (e) => {
                const { value } = e.target;
                // username Check exist
                const user = users.find((user) => user.username === value);
                if (user) {
                  setUserExist(true);
                } else {
                  setUserExist(false);
                }
              },
            })}
          />
        </div>
        {errors.username && (
          <p className="errorMessage">{errors.username.message}</p>
        )}
        {isUserExist && (
          <p className="errorMessage">Tên đăng nhập đã tồn tại</p>
        )}

        {/* password */}
        <div className={`form-control ${errors.password ? "errorInput" : ""}`}>
          <input
            type={isShowPassword ? "text" : "password"}
            className="w-full pl-4 leading-[36px]"
            placeholder="Mật khẩu"
            spellCheck={false}
            {...register("password", {
              required: "Không được để trống",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  "Mật khẩu phải dài ít nhất 8 ký tự, gồm tối thiểu 1 ký tự hoa, 1 ký tự thường và 1 ký tự số",
              },
            })}
          />
          <div
            className="password-eye-icon cursor-pointer"
            onClick={() => setShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <AiFillEyeInvisible size={18} />
            ) : (
              <AiFillEye size={18} />
            )}
          </div>
        </div>
        {errors.password && (
          <p className="errorMessage">{errors.password.message}</p>
        )}

        {/*confirm password  */}
        <div
          className={`form-control ${
            errors.passwordConfirm ? "errorInput" : ""
          }`}
        >
          <input
            type={isShowPasswordConfirm ? "text" : "password"}
            className="w-full pl-4 leading-[36px]"
            placeholder="Nhập lại mật khẩu"
            spellCheck={false}
            {...register("passwordConfirm", {
              required: "Không được để trống",
              validate: (value) =>
                value === password.current || "Mật khẩu không trùng khớp",
            })}
          />
          <div
            className="password-eye-icon cursor-pointer"
            onClick={() => setShowPasswordConfirm(!isShowPasswordConfirm)}
          >
            {isShowPasswordConfirm ? (
              <AiFillEyeInvisible size={18} />
            ) : (
              <AiFillEye size={18} />
            )}
          </div>
        </div>
        {errors.passwordConfirm && (
          <p className="errorMessage">{errors.passwordConfirm.message}</p>
        )}

        <div className="text-center">
          <button
            type="submit"
            className={`text-16 text-white font-bold px-[60px] py-3 bg-orange-400 mt-4 rounded-md hover:bg-primary relative ${
              isLoading ? "customDisable" : ""
            }`}
          >
            ĐĂNG KÝ
            {isLoading && (
              <FaSpinner size={24} className="loading registerSpinner" />
            )}
          </button>
        </div>
      </form>
      {/* footer */}
      <div className="text-center mt-3">
        <h2 className="font-bold text-primary mb-3">OR</h2>

        <button className="w-[90%] m-auto flex justify-center items-center py-3 bg-[#0675e8] rounded-xl hover:bg-blue-700">
          <GrFacebook size={20} className="mr-3" />
          <span className="text-center text-white">
            Đăng nhập bằng Facebook
          </span>
        </button>

        <div className="text-14 flex justify-center mt-3">
          <p>Bạn đã có tài khoản?</p>
          <button
            className="text-purple-900 font-semibold pl-2 mb-7 hover:text-purple-700"
            onClick={() => setLogin(true)}
          >
            Đăng nhập ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
