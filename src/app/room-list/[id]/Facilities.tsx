import {
  faBath,
  faBuilding,
  faCheck,
  faClock,
  faFan,
  faPersonSwimming,
  faSnowflake,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Facilities = ({ roomAmenities }: any) => {
  const facilitiesItem = [
    {
      id: 1,
      name: "City View",
      icons: faBuilding,
    },
    {
      id: 2,
      name: "Outdoor swimming pool",
      icons: faPersonSwimming,
    },
    {
      id: 3,
      name: "Free WiFi",
      icons: faWifi,
    },
    {
      id: 4,
      name: "Air conditioning",
      icons: faFan,
    },
    {
      id: 5,
      name: "Private bathroom",
      icons: faBath,
    },
    {
      id: 6,
      name: "24-hour front desk",
      icons: faClock,
    },
    {
      id: 7,
      name: "Key card access",
      icons: faCheck,
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto my-5">
      <div className="flex items-center space-x-4">
        {roomAmenities?.map((item: any) => (
          <div key={item?.id} className="flex items-center border px-6 py-3">
            <FontAwesomeIcon icon={faSnowflake} className="w-8 me-2" />
            {/* <FontAwesomeIcon icon={item?.icons} className="w-8 me-2" /> */}
            <p className="text-base uppercase">{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
