import React from "react";
import BookingForm from "./BookingForm/BookingForm";
import CakeList from "./CakeList/CakeList";
import News from "./News/News";

function Content() {
  return (
    <div className="bg-secondary min-h-[1000px]">
      <CakeList />
      <BookingForm />
      <News />
    </div>
  );
}

export default Content;
