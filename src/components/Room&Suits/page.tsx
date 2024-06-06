"use client";
import CommonTitle from "../commonTitle/Page";
import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import cox from "../../../public/assests/hotelfull1.jpg";
import room2 from "../../../public/assests/newfull4.jpg";
import room3 from "../../../public/assests/newhotel5.jpg";
import room1 from "../../../public/assests/new.jpg";
import room from "../../../public/assests/hotel1.jpg";
import Image from "next/image";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { useGetData } from "@/lib/serverApiCall";
import { IMG_URl } from "@/lib/request";
import Link from "next/link";


const RoomSuits = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [data, refetch, isLoading] = useGetData({
    api: `/reservation-client/room`,
  });

  return (
    <div className="my-20 px-2 lg:px-0">
      <div className="lg:max-w-screen-2xl mx-auto text-center">
        <CommonTitle
          title="Rooms & Suites"
          description="These popular Rooms & Suites have a lot to offer "
        />
        {isLoading ? (
          <div className="max-w-screen-2xl mx-auto flex mx-auto space-x-5">
            <svg
              className="animate-spin h-5 w-5 mr-3 bg-baseBgColor"
              viewBox="0 0 24 24"
            />
            <svg
              className="animate-spin h-5 w-5 mr-3 bg-baseBgColor"
              viewBox="0 0 24 24"
            />
            <svg
              className="animate-spin h-5 w-5 mr-3 bg-baseBgColor"
              viewBox="0 0 24 24"
            />
          </div>
        ) : (
          <div className="my-5">
            <Swiper
              slidesPerView={isMobile ? 1 : 5}
              spaceBetween={30}
              freeMode={true}
              pagination={false}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {Array.isArray(data?.data) &&
                data?.data?.map((item: any) => (
                  <SwiperSlide key={item.id}>
                    <div className="border rounded-2xl bg-white shadow">
                      <Image
                        src={
                          item?.room_images
                            ? `${IMG_URl}${item?.room_images[0]?.photo}`
                            : room2
                        }
                        alt={item?.room_type}
                        width={isMobile ? 500 : 300}
                        height={200}
                        className="rounded-t-lg w-[485px] h-[315px] lg:w-[281px] lg:h-[183px] object-cover"
                      />
                      <div className="space-y-2 my-5 px-3 text-left rounded-lg">
                        <h1 className="font-semibold">
                          {!isMobile
                            ? item?.bed_type?.slice(0, 30)
                            : item?.bed_type}
                        </h1>
                        <Link
                          href={`/room-list/${item?.id}`}
                          className="flex items-center justify-between text-baseTextColor"
                        >
                          <p>View</p>
                          <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link>
                        {/* <p>{item?.details}</p> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomSuits;
