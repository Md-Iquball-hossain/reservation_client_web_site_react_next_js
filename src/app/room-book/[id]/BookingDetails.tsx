"use client";
import Image from "next/image";
import payment from "../../../../public/assests/payment.jpg";
import { useGetData } from "@/lib/serverApiCall";
import { useEffect, useState } from "react";
const BookingDetails = ({ params, selectedItem, setBookingInfoData }: any) => {
  const [bookData, setBookData] = useState<any>({
    extra_charge: 0,
    discount_amount: 0,
    tax_amount:0,
  });
  setBookingInfoData(bookData);

  const [data, refetch, isLoading] = useGetData({
    api: `/reservation-client/room/${params}`,
  });

  const checkInDate = new Date(selectedItem?.checkInDate);
  const checkOutDate = new Date(selectedItem?.checkOutDate);
  const differenceInDays = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const {
    aminities_charge,
    discount_percent,
    room_size,
    adult,
    child,
    rate_per_night,
    room_type,
    hotel_name,
    hotel_address,
    occupancy,
    bed_type,
    tax_percent,
  } = data?.data || {};

  const nightStayBill = rate_per_night * differenceInDays || 0;
  const discountAmount = (nightStayBill * discount_percent) / 100;
  const taxPercent = (nightStayBill * tax_percent) / 100;
  const totalBill = nightStayBill - discountAmount + aminities_charge + taxPercent;

  useEffect(() => {
    // Only update bookData if both aminities_charge and discountAmount are valid
    if (
      typeof aminities_charge !== "undefined" &&
      typeof discountAmount !== "undefined" &&
      typeof taxPercent !== "undefined" 
    ) {
      setBookData({
        extra_charge: aminities_charge,
        discount_amount: discountAmount,
        tax_amount: taxPercent,
      });
    }
  }, [aminities_charge, discountAmount,taxPercent]);

  return (
    <div className="px-5 py-8 lg:py-2">
      <Image src={payment} alt="payment" className="rounded" />
      <div className=" py-3 space-y-2">
        <p className="font-semibold">{hotel_name}</p>
        <p>{hotel_address}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Rate Per Night</h1>
          {/* <h1>Dates</h1> */}
        </div>
        <div className="space-y-3 w-[10rem] text-right ">
          <h1 className="font-semibold">{rate_per_night} BDT</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Occupancy</h1>
          <h1>Adult</h1>
          <h1>Child</h1>
        </div>
        <div className="space-y-3">
          <h1>{occupancy} person</h1>
          <h1>{adult} person</h1>
          <h1>{child} person</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Room type</h1>
        </div>
        <div className="space-y-3 w-[10rem] text-right ">
          <h1>{room_type}</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Room Size</h1>
        </div>
        <div className="space-y-3 w-[10rem] text-right ">
          <h1>{room_size} sqft</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Bed type</h1>
        </div>
        <div className="space-y-3 w-[10rem] text-right ">
          <h1>{bed_type}</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Discount Percentage</h1>
        </div>
        <div className="space-y-3 w-[10rem] text-right ">
          <h1>{discount_percent}%</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Tax Percentage</h1>
        </div>
        <div className="space-y-3 w-[10rem] text-right ">
          <h1>{tax_percent}%</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Check In Date</h1>
          <h1>Check Out Date</h1>
        </div>
        <div className="space-y-3 w-[18rem] text-right ">
          <h1>{selectedItem?.checkInDate || "N/A"}</h1>
          <h1>{selectedItem?.checkOutDate || "N/A"}</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>{differenceInDays ? differenceInDays : 1} night stay</h1>
        </div>
        <div className="space-y-3 w-[18rem] text-right ">
          <h1>{differenceInDays === 0 ? rate_per_night : nightStayBill} BDT</h1>
          {/* <h1>{rate_per_night * differenceInDays } BDT</h1> */}
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Discount Amount</h1>
        </div>
        <div className="space-y-3 w-[18rem] text-right ">
          <h1>- {discountAmount} BDT</h1>
          {/* <h1>{rate_per_night * differenceInDays } BDT</h1> */}
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Amenities Charge</h1>
        </div>
        <div className="space-y-3 w-[10rem] text-right ">
          <h1>+ {aminities_charge} BDT</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Tax Amount</h1>
        </div>
        <div className="space-y-3 w-[10rem] text-right ">
          <h1>+ {taxPercent} BDT</h1>
        </div>
      </div>
      <hr className="my-4 border-2 border-black" />
      <div className="flex justify-between ">
        <div className="space-y-3 font-semibold">
          <h1>Grand Total</h1>
        </div>
        <div className="space-y-3 w-[18rem] text-right font-semibold">
          <h1>{totalBill} BDT</h1>
        </div>
      </div>

      <p className="mt-10">
        Final payment will be in the hotels currency. Learn more about about
        currency exchange data.
      </p>
    </div>
  );
};

export default BookingDetails;
