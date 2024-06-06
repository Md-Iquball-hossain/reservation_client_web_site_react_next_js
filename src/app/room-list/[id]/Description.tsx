import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IMG_URl } from "@/lib/request";
import Image from "next/image";

const Description = ({
  room_description,
  hotel_description,
  hotel_address,
  hotel_phone,
  hotel_email,
  hotel_name,
  hotel_logo,
  room_id,
}: any) => {
  return (
    <div className="max-w-screen-2xl mx-auto pb-5">
      <div className="lg:grid lg:grid-cols-3 gap-10 mt-5 lg:mt-0">
        <div className="col-span-2 space-y-5">
          {/* <p>
            You're eligible for a Genius discount at RAMADA ENCORE BY WYNDHAM
            SAIGON D1 - Formerly M Boutique Hotel Saigon! To save at this
            property, all you have to do is sign in..!
          </p>
          <p>
            Located in the bustling Ho Chi Minh City, RAMADA ENCORE BY WYNDHAM
            SAIGON D1 - Formerly M Boutique Hotel Saigon offers comfortable
            accommodation for guests of all walks of life. The hotel a
            year-round outdoor pool and an on-site restaurant.
          </p>
          <p>
            Opera House is 300 metres from RAMADA ENCORE BY WYNDHAM SAIGON D1 -
            Formerly M Boutique Hotel Saigon, while Parkson is 400 metres away.
            Tan Son Nhat International Airport is 7 km from the property.
          </p>
          <p>
            All rooms are equipped with a flat-screen TV with cable channels.
            Some units feature a seating area to relax in after a busy day. You
            will find a kettle in the room. The rooms come with a private
            bathroom fitted with a bath or shower. For your comfort, you will
            find slippers, free toiletries and a hair dryer.
          </p>
          <p>
            This property offers guests with 24-hour access to the front-desk
            services. Free WiFi and free private parking are available on-site.
          </p> */}
          <p>{room_description}</p>
        </div>

        <div className="space-y-3">
          <div>
            <Link
              href={`/room-book/${room_id}`}
              className="uppercase py-2 flex justify-center border bg-baseBgColor text-white hover:bg-white hover:text-baseTextColor duration hover:duration-300"
            >
              Book Now
            </Link>
          </div>

          <div className="col-span-1 border px-5 py-8 space-y-5">
            <div className="flex items-center space-x-5">
              <Image
                src={`${IMG_URl}${hotel_logo}`}
                alt="logo"
                width={100}
                height={100}
              />
              <p className="text-xl font-bold">{hotel_name}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faLocationDot} className="w-4" />
              <p>{hotel_address}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="w-4" />
              <p>{hotel_email}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhoneVolume} className="w-4" />
              <p>{hotel_phone}</p>
            </div>
            <p>{hotel_description}</p>

            <div>
              <Link
                href={`/contact`}
                className=" flex justify-center  py-2 bg-baseBgColor text-white "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
