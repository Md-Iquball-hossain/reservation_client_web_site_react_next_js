"use client";
import { useState } from "react";
import BookingDetails from "./BookingDetails";
import BookingForm from "./BookingForm";

const BookHotel = ({ params }: any) => {
  const [selectedItem, setSelectedItem] = useState({});
  const [ bookingInfoData, setBookingInfoData] = useState({});



  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-2 lg:px-0 text-black">
      <h1 className="text-4xl lg:text-6xl font-semibold">
        Complete your reservation
      </h1>

      <div className="lg:grid lg:grid-cols-3 gap-5 my-10">
        <div className="col-span-2">
          <BookingForm
            params={params?.id}
            selectedItem={selectedItem}
            bookingInfoData={bookingInfoData}
            setSelectedItem={setSelectedItem}
          />
        </div>
        <div className="col-span-1">
          <BookingDetails
            params={params?.id}
            selectedItem={selectedItem}
            setBookingInfoData={setBookingInfoData}
          />
        </div>
      </div>
    </div>
  );
};

export default BookHotel;
