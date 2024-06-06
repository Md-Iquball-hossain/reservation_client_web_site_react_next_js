"use client";
import CommonPageHeaderTitle from "@/components/commonTitle/commonPageHeaderTitle";
import hotelroom2 from "../../../public/assests/hotel2.jpg";
import Image from "next/image";
import { useGetData } from "@/lib/serverApiCall";
import { IMG_URl } from "@/lib/request";

const Gallery = () => {
  const [data, refetch, isLoading] = useGetData({
    api: `/reservation-client/images`,
  });

  console.log("gallery", data?.data);

  return (
    <div>
      <CommonPageHeaderTitle title="Gallery" />
      <div className="max-w-screen-2xl mx-auto pb-10 text-black">
        <p className="text-center py-20 text-4xl ">Gallery book of VIP Hotel</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {Array.isArray(data?.data) &&
            data?.data?.map((img: any) => (
              <div key={img?.id}>
                <Image
                  src={img?.photo ? `${IMG_URl}${img?.photo}` : hotelroom2}
                  width={200}
                  height={300}
                  alt={img?.room_number}
                  className="w-full hover:duration-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
