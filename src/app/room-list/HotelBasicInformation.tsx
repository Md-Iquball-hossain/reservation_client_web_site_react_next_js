"use client";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination, FreeMode } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import hotel2 from "../../../public/assests/hotel2.jpg";
import hotel3 from "../../../public/assests/hotel3.jpg";
import Image from "next/image";
import { IMG_URl } from "@/lib/request";

const HotelBasicInformation = ({ basicInfo }: any) => {
  const { room_images, room_type, bed_type, child, adult, room_amenities } =
    basicInfo;
  return (
    <div className="grid grid-cols-3 gap-5 ">
      <div className="col-span-1 border h-[15rem]">
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
          className="mySwiper bg-slate-300 w-[232px] h-[240px] "
        >
          {room_images ? (
            <>
              {room_images?.map((img: any) => (
                <SwiperSlide key={img?.id} className="object-cover">
                  <Image
                    src={`${IMG_URl}${img?.photo}`}
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
                <Image src={hotel2} alt={"hotel2"} placeholder="blur" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={hotel3} alt={"hotel3"} placeholder="blur" />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
      <div className="col-span-2 space-y-3">
        <div>
          <p className="text-xl font-semibold">{room_type?.charAt(0)?.toUpperCase() + room_type?.slice(1)}</p>
          <div className="text-xs mt-1 ">
            <FontAwesomeIcon icon={faStar} className="w-4" />
            <FontAwesomeIcon icon={faStar} className="w-4" />
            <FontAwesomeIcon icon={faStar} className="w-4" />
            <FontAwesomeIcon icon={faStar} className="w-4" />
            <FontAwesomeIcon icon={faStar} className="w-4" />
          </div>
        </div>
        <p className="text-baseTextColor">{bed_type}</p>

        <div className="flex items-center space-x-3 font-semibold text-slate-800">
          {child === 0 ? "" : <p>Child : {child} ,</p>}
          {adult === 0 ? "" : <p>Adult : {adult}</p>}
        </div>

        {/* <p className="font-semibold text-slate-800">Resort</p> */}
        {child === 0 ? (
          <button className="border px-3 py-1 rounded text-sm">
            Couple Friendly
          </button>
        ) : (
          <button className="border px-3 py-1 rounded text-sm">
            Family Friendly
          </button>
        )}
        {room_amenities && (
          <div className="flex items-center space-x-2 text-green-600">
            <FontAwesomeIcon icon={faCheck} className="w-4" />
            {room_amenities?.map((rm: any) => (
              <div key={rm?.id} className=" text-xs ">
                <p>{rm?.name}</p>
              </div>
            ))}
          </div>
        )}

        <p className="text-sm">
          Stunning Property, cozy ambience, and welcoming staff
        </p>
      </div>
    </div>
  );
};

export default HotelBasicInformation;
