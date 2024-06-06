"use client";
import { IMG_URl } from "@/lib/request";
import { useGetSelectedRoomList, useGetData } from "@/lib/serverApiCall";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

const SingleBookedRoomDetails = ({ selectedId }: any) => {
  // console.log("selectedId", selectedId);
  if (!selectedId) {
    return <div>Loading...</div>;
  }
return (
  <div className='grid'>
          <span className="text-black font-semibold text-xl mb-3 ">
  {selectedId?.booking_rooms?.[0]?.room_type.toUpperCase()}
          </span>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // className="mySwiper bg-slate-300 w-[232px] h-[240px] "
        className="mySwiper bg-slate-300 w-[560px] h-[400px] "
      >
        {selectedId?.booking_rooms?.[0] ? (
          <>
            {selectedId?.booking_rooms?.[0]?.images.map((img: any) => (
              <SwiperSlide key={img?.id} className="object-cover">
                <Image
                  src={`${IMG_URl}${img}`}
                  alt={img?.id}
                  layout="fill" // Use "fill" layout
                  objectFit="cover"
                  className="object-cover"
                  style={{ objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            <SwiperSlide>
              <div>no image</div>
            </SwiperSlide>
          </>
        )}
      </Swiper>
      <div className="space-y-2 mt-2">
         <div className="flex items-center space-x-5">
           <p className="border px-2 py-1 rounded">
             <FontAwesomeIcon icon={faPerson} className="w-4 me-3" />
             {selectedId?.total_occupancy}
           </p>
           <p className="border px-2 py-1 rounded">
             <FontAwesomeIcon icon={faBed} className="w-4 me-3" />
             {selectedId?.booking_rooms?.[0]?.bed_type}
           </p>
           <div className="py-2 px-5 border rounded text-white bg-green-400">
             {selectedId?.booking_rooms?.[0]?.availability === 1 &&
              "Book Confirmed"}
          </div>
        </div>
        <p className="text-baseTextColor">{selectedId?.location}</p>
        <p className="text-sm ">Booking Number : {selectedId?.booking_no}</p>
        <p className="text-sm">Night Stays : {selectedId?.number_of_nights}</p>
        <p className="text-sm">Extra Charge : {selectedId?.extra_charge} </p>
        <p className="text-sm">Grand Total : {selectedId?.grand_total} </p>
      </div>
      <div className="flex  justify-center">
        <div className="flex space-x-10 justify-center">
          <hr className="my-5 w-28  border-gray-400" />
          <h1 className="text-xl font-bold text-center font-serif">
            Guest Information
          </h1>
          <hr className="my-5 w-28  border-gray-400" />
        </div>
      </div>

      <div className="space-y-2 mt-2">
        <p className="text-sm">Guest Name : {selectedId?.name}</p>
        <p className="text-sm ">Email : {selectedId?.email}</p>
        <p className="text-sm">Nid no : {selectedId?.nid_no}</p>
        <p className="text-sm">Passport no : {selectedId?.passport_no}</p>

        <p className="text-sm">
          Check In Date & Time :
          {dayjs(selectedId?.check_in_time).format("DD-MM-YYYY hh:mm A")}
        </p>
        <p className="text-sm">
          Check Out Date & Time :
          {dayjs(selectedId?.check_out_time).format("DD-MM-YYYY hh:mm A")}
        </p>
      </div>
    </div>
  );

};

export default SingleBookedRoomDetails;
