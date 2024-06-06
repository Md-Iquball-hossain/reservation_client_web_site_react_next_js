"use client";
import CommonTitle from "../commonTitle/Page";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import cox from "../../../public/assests/hotelfull1.jpg";
import room2 from "../../../public/assests/newfull4.jpg";
import room3 from "../../../public/assests/newhotel5.jpg";
import room1 from "../../../public/assests/new.jpg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useGetData } from "@/lib/serverApiCall";
import { IMG_URl } from "@/lib/request";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faChild, faUser } from "@fortawesome/free-solid-svg-icons";

const exploreBd = [
  {
    id: 1,
    img: cox,
    title: "Standard One Person Room ",
    details:
      "Lorem ipsum dolor sit amet adipisicing elit. Corporis, accusantium. provident soluta quibusdam quisquam excepturi vitae vero?",
  },
  {
    id: 2,
    img: room2,
    title: "Club lounge access, Larger Guest room , 1 King",
    details:
      "Lorem ipsum dolor sit amet adipisicing elit. Corporis, accusantium. provident soluta quibusdam quisquam excepturi vitae vero?",
    // details: "60 Properties",
  },
  {
    id: 3,
    img: room1,
    title: "Club lounge access, Larger Guest room , 2 Double",
    details:
      "Lorem ipsum dolor sit amet adipisicing elit. Corporis, accusantium. provident soluta quibusdam quisquam excepturi vitae vero?",
    // details: "60 Properties",
  },
  {
    id: 4,
    img: room3,
    title: "Club lounge access, 1 BedRoom Junior Suite  ",
    details:
      "Lorem ipsum dolor sit amet adipisicing elit. Corporis, accusantium. provident soluta quibusdam quisquam excepturi vitae vero?",
    // details: "60 Properties",
  },
  {
    id: 5,
    img: cox,
    title: "Guest Room, 1 King",
    details:
      "Lorem ipsum dolor sit amet adipisicing elit. Corporis, accusantium. provident soluta quibusdam quisquam excepturi vitae vero?",
    // details: "60 Properties",
  },
  {
    id: 6,
    img: cox,
    title: "Guest Room, 2 Double",
    details:
      "Lorem ipsum dolor sit amet adipisicing elit. Corporis, accusantium. provident soluta quibusdam quisquam excepturi vitae vero?",
    // details: "60 Properties",
  },
  {
    id: 7,
    img: cox,
    title: "Guest Room, 1 Large",
    details:
      "Lorem ipsum dolor sit amet adipisicing elit. Corporis, accusantium. provident soluta quibusdam quisquam excepturi vitae vero?",
    // details: "60 Properties",
  },
];

const BestRooms = () => {
  const [data, refetch, isLoading] = useGetData({
    api: `/reservation-client/room`,
  });

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="my-20 px-2 lg:px-0">
      <div className="lg:max-w-screen-2xl mx-auto text-center">
        <CommonTitle
          title="Our Best Room"
          description="These popular and best room have a lot to offer "
        />
        {isLoading ? (
          <div className="max-w-screen-2xl  flex mx-auto space-x-5">
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
              slidesPerView={isMobile ? 1 : 4}
              spaceBetween={30}
              freeMode={true}
              pagination={false}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {Array.isArray(data?.data) &&
                data?.data
                  ?.filter(
                    (item: any) =>
                      item?.room_type === "super-deluxe" ||
                      item?.room_type === "deluxe"
                  )
                  ?.slice(0, 6)
                  ?.map((item: any) => (
                    <SwiperSlide key={item?.id}>
                      <div className="border lg:w-[23rem] rounded-2xl bg-white ">
                        <Image
                          src={
                            item?.room_images
                              ? `${IMG_URl}${item?.room_images[0]?.photo}`
                              : room2
                          }
                          alt={item?.room_type}
                          width={100}
                          height={200}
                          className="rounded-t-lg w-[485px] h-[315px] lg:w-full lg:h-[18rem] object-cover"
                        />
                        <div className="space-y-2 my-5 px-5 text-left rounded-lg">
                          <h1 className="font-semibold">
                            {!isMobile
                              ? item?.room_type
                                  ?.charAt(0)
                                  ?.toUpperCase()
                                  ?.slice(0, 30) + item?.room_type?.slice(1)
                              : item?.room_type}
                          </h1>
                          <p className="pb-3 h-[5rem]">
                            {item?.room_description
                              ? item?.room_description?.slice(0, 130) + "..."
                              : "No Description Available"}
                          </p>
                          <Link
                            href={`/room-list/${item?.id}`}
                            className="border flex items-center justify-center w-full py-2 rounded  border-baseTextColor text-baseTextColor hover:bg-baseBgColor hover:text-white duration-300 hover:duration-300"
                          >
                            View Room
                          </Link>
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

export default BestRooms;
