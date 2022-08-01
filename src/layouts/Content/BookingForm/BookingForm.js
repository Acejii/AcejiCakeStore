import React, { useState } from "react";
import SuccessAlert from "../../../utils/Alert/SuccessAlert";
import "./BookingForm.scss";
function BookingForm() {
  const [isShowSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState({
    name: "",
    bookEmail: "",
    phone: "",
    content: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({
      name: "",
      bookEmail: "",
      phone: "",
      content: "",
    });

    setShowSuccessMessage(true);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="bg-image text-white p-10 flex justify-center">
      <div className="w-1/2 border-2 px-5 py-5 background-shadow">
        {/* title */}
        <div className="text-center mb-6">
          <h2 className="text-[32px] font-extrabold text-[#00a887]">
            ĐẶT ONLINE NGAY!
          </h2>
          <h3>ĐỪNG CHỜ ĐỢI NỮA</h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="mb-3 flex flex-col">
            <label htmlFor="name" className="mb-1">
              Họ tên của bạn
            </label>
            <input
              type="text"
              required
              className="text-black p-2 rounded-[5px] leading-6"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Họ tên của bạn"
              spellCheck={false}
            />
          </div>
          {/* email */}
          <div className="mb-3 flex flex-col">
            <label htmlFor="bookEmail" className="mb-1">
              Địa chỉ email của bạn
            </label>
            <input
              type="text"
              required
              className="text-black p-2 rounded-[5px] leading-6"
              id="bookEmail"
              name="bookEmail"
              value={values.bookEmail}
              onChange={handleChange}
              placeholder="Địa chỉ email của bạn"
              spellCheck={false}
            />
          </div>
          {/* phone */}
          <div className="mb-3 flex flex-col">
            <label htmlFor="phone" className="mb-1">
              Số điện thoại của bạn
            </label>
            <input
              type="text"
              required
              className="text-black p-2 rounded-[5px] leading-6"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Số điện thoại của bạn"
              spellCheck={false}
            />
          </div>
          {/* content */}
          <div className="mb-3 flex flex-col">
            <label htmlFor="content" className="mb-1">
              Nội dung
            </label>
            <textarea
              type="text"
              required
              className="text-black p-2 rounded-[5px] leading-6"
              id="content"
              name="content"
              value={values.content}
              onChange={handleChange}
              placeholder="Nội dung"
              spellCheck={false}
              rows="5"
            />
          </div>

          {/* Submit button */}
          <div className="text-center mt-4">
            <button className="text-18 font-bold px-3 py-2 bg-button rounded-[5px] hover:bg-red-500">
              ĐẶT NGAY
            </button>
          </div>

          {isShowSuccessMessage && (
            <SuccessAlert message="Bạn đã đặt hàng thành công, cảm ơn đã chọn Aceji ^^" />
          )}
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
