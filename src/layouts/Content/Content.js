import React from "react";
import BookingForm from "./BookingForm/BookingForm";
import CakeList from "./CakeList/CakeList";
import News from "./News/News";

function Content() {
  return (
    <div className="bg-secondary">
      <div className="min-h-[1000px]">
        <CakeList />
        <BookingForm />
        <News />
      </div>
    </div>
  );
}

export default Content;
