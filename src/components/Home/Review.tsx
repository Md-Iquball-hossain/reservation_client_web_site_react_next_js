"use client";
import Image from "next/image";
import man from "../../../public/assests/man.jpg";
import CommonTitle from "../commonTitle/Page";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Review = () => {
  const review: any = [
    {
      id: 1,
      img: man,
      message:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origincoffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Jubayer Rhaman",
    },
    {
      id: 2,
      img: man,
      message:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origincoffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Auncon Roy",
    },
    {
      id: 3,
      img: man,
      message:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origincoffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Iquball Hossain",
    },
    // {
    //   id: 4,
    //   img: man,
    //   message:
    //     "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origincoffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    //   name: "Jubayer Rhaman",
    // },
  ];

  return (
    <div className="my-20 px-2 lg:px-0">
      <div className="lg:max-w-screen-2xl mx-auto text-center">
        <CommonTitle
          title="Our Happy Client"
          description="Some satisfied Review from our happy client"
        />

        <section className="body-font">
          <div className=" px-5 py-24 mx-auto">
            <div className="-m-4">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
              >
                {review?.map((item: any) => (
                  <SwiperSlide key={item?.id}>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mx-auto">
                      <div className="h-full text-center">
                        <Image
                          src={item?.img}
                          alt="man"
                          className="w-20 h-20 mb-8 object-cover object-center rounded-full mx-auto"
                        />
                        <p className="leading-relaxed">{item?.message}</p>
                        <span className="inline-block h-1 w-10 rounded bg-baseBgColor mt-6 mb-4"></span>
                        <h2 className="text-white font-medium title-font tracking-wider text-sm">
                          HOLDEN CAULFIELD
                        </h2>
                        <p className="text-gray-500">{item?.name}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
