import React from "react";
import "./BookingForm.scss";
function BookingForm() {
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
        <form>
          {/* name */}
          <div className="mb-3 flex flex-col">
            <label htmlFor="name" className="mb-1">
              Họ tên của bạn
            </label>
            <input
              className="text-black p-2 rounded-[5px] leading-6"
              id="name"
              type="text"
              placeholder="Họ tên của bạn"
              spellCheck={false}
            />
          </div>
          {/* email */}
          <div className="mb-3 flex flex-col">
            <label htmlFor="name" className="mb-1">
              Địa chỉ email của bạn
            </label>
            <input
              className="text-black p-2 rounded-[5px] leading-6"
              id="name"
              type="text"
              placeholder="Địa chỉ email của bạn"
              spellCheck={false}
            />
          </div>
          {/* phone */}
          <div className="mb-3 flex flex-col">
            <label htmlFor="name" className="mb-1">
              Số điện thoại của bạn
            </label>
            <input
              className="text-black p-2 rounded-[5px] leading-6"
              id="name"
              type="text"
              placeholder="Số điện thoại của bạn"
              spellCheck={false}
            />
          </div>
          {/* content */}
          <div className="mb-3 flex flex-col">
            <label htmlFor="name" className="mb-1">
              Nội dung
            </label>
            <textarea
              className="text-black p-2 rounded-[5px] leading-6"
              id="name"
              type="text"
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
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
