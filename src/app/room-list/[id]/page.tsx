"use client";
import {
  faBed,
  faChild,
  faHeart,
  faLocationDot,
  faMaximize,
  faPeopleGroup,
  faShareNodes,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hotel1 from "../../../../public/assests/hotelFull1.jpg";
import hotel2 from "../../../../public/assests/new.jpg";
import hotel3 from "../../../../public/assests/hoteFull3.jpg";
import hotel4 from "../../../../public/assests/newfull4.jpg";
import hotel5 from "../../../../public/assests/newhotel5.jpg";
import Image from "next/image";
import Facilities from "./Facilities";
import Description from "./Description";
import { useGetData } from "@/lib/serverApiCall";
import Link from "next/link";
import { IMG_URl } from "@/lib/request";

const RoomView = ({ params }: any) => {
  const [data, refetch, isLoading] = useGetData({
    api: `/reservation-client/room/${params?.id}`,
  });

  // console.log("301", data?.data);

  const {
    hotel_email,
    adult,
    aminities_charge,
    availability,
    bed_type,
    child,
    discount,
    discount_percent,
    hotel_id,
    occupancy,
    rate_per_night,
    refundable,
    refundable_charge,
    refundable_time,
    room_amenities,
    room_description,
    room_id,
    room_images,
    room_number,
    room_size,
    hotel_address,
    hotel_map_url,
    room_type,
    hotel_logo,
    hotel_name,
    hotel_phone,
    hotel_description,
  } = data?.data || "";

  return (
    <>
      {isLoading ? (
        <div className="max-w-screen-2xl mx-auto flex  space-x-5">
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
        <div className="text-black">
          <div className="py-10">
            <div className="max-w-screen-2xl mx-auto ">
              <div className="flex justify-between">
                <div className="w-[60rem] space-y-4">
                  <p className="text-3xl font-semibold">{room_type}</p>

                  <div className="flex items-center space-x-2 ">
                    <FontAwesomeIcon icon={faLocationDot} className="w-4" />
                    <p>
                      {hotel_address}
                      <span className="font-semibold">
                        – Great location -{" "}
                        {hotel_map_url ? (
                          <Link
                            href={hotel_map_url}
                            className="underLine text-baseTextColor"
                          >
                            show map
                          </Link>
                        ) : (
                          " "
                        )}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 font-semibold text-slate-800">
                    {child === 0 ? (
                      ""
                    ) : (
                      <p className="border px-2 py-1 rounded">
                        <FontAwesomeIcon icon={faChild} className="w-4 me-3" />{" "}
                        {child}
                      </p>
                    )}
                    {adult === 0 ? (
                      ""
                    ) : (
                      <p className="border px-2 py-1 rounded">
                        <FontAwesomeIcon icon={faUser} className="w-4 me-3" />{" "}
                        {adult}
                      </p>
                    )}
                    {occupancy === 0 ? (
                      ""
                    ) : (
                      <p className="border px-2 py-1 rounded">
                        <FontAwesomeIcon
                          icon={faPeopleGroup}
                          className="w-6 me-3"
                        />{" "}
                        {occupancy}
                      </p>
                    )}
                    {room_size === 0 ? (
                      ""
                    ) : (
                      <p className="border px-2 py-1 rounded">
                        <FontAwesomeIcon
                          icon={faMaximize}
                          className="w-6 me-3"
                        />{" "}
                        {room_size} sqft
                      </p>
                    )}
                    {!bed_type ? (
                      ""
                    ) : (
                      <p className="border px-2 py-1 rounded">
                        <FontAwesomeIcon icon={faBed} className="w-4 me-3" />{" "}
                        {bed_type}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="space-x-5">
                    <FontAwesomeIcon icon={faHeart} className="w-4" />
                    <FontAwesomeIcon icon={faShareNodes} className="w-4" />
                    <button className="border text-xl px-2 rounded">
                      Reserve
                    </button>
                  </div>
                  <div className="space-x-2 mt-3 ms-4">
                    {/* <FontAwesomeIcon icon={faTag} className="w-4" /> */}
                    <span className="text-xl font-bold">
                      {" "}
                      + BDT {rate_per_night}
                    </span>{" "}
                    /per night
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-screen-2xl mx-auto grid grid-cols-2 pt-5">
              <div>
                {room_images?.length > 0 && room_images[0] && (
                  <Image
                    src={`${IMG_URl}${room_images[0]?.photo}`}
                    alt="hotel"
                    width={500}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex flex-wrap">
                {room_images?.slice(1)?.map((image: any, index: number) => (
                  <div key={index} className="w-1/2 ">
                    <Image
                      src={`${IMG_URl}${image?.photo}`}
                      alt={`hotel${index + 2}`}
                      width={500}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="max-w-screen-2xl mx-auto grid grid-cols-2 pt-5">
    <div>
   { room_images[0] && <Image src={`${IMG_URl}${room_images[0]}`} alt="hotel1" width={500} height={200} /> }
    </div>
      <div className="flex">
        <div>
          <div>
            <Image src={hotel2} alt="hotel2" />
          </div>
          <div>
            <Image src={hotel4} alt="hotel2" />
          </div>
        </div>
        <div>
          <div>
            <Image src={hotel3} alt="hotel2" />
          </div>
          <div>
            <Image src={hotel5} alt="hotel2" />
          </div>
        </div>
      </div>
    </div> */}
          </div>
          <Facilities roomAmenities={room_amenities} />
          <Description
            room_description={room_description}
            hotel_address={hotel_address}
            room_id={room_id}
            hotel_name={hotel_name}
            hotel_logo={hotel_logo}
            hotel_email={hotel_email}
            hotel_description={hotel_description}
            hotel_phone={hotel_phone}
          />
        </div>
      )}
    </>
  );
};

export default RoomView;
