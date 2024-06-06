import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBoltLightning,
  faDumbbell,
  faEllipsis,
  faMugHot,
  faPersonSwimming,
  faSquareParking,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MyItem {
  id: number;
  title: string;
  itemIcon: IconProp;
}

const ServiceTools = () => {
  const listOfServices: MyItem[] = [
    {
      id: 1,
      title: "Parking Area",
      itemIcon: faSquareParking,
    },
    {
      id: 2,
      title: "Swimming Pool",
      itemIcon: faPersonSwimming,
    },
    {
      id: 3,
      title: "Fitness Gym",
      itemIcon: faDumbbell,
    },
    {
      id: 4,
      title: "Wifi Network",
      itemIcon: faWifi,
    },
    {
      id: 5,
      title: "Breakfast",
      itemIcon: faMugHot,
    },
    {
      id: 6,
      title: "24/7 Light",
      itemIcon: faBoltLightning,
    },
    {
      id: 7,
      title: "Others",
      itemIcon: faEllipsis,
    },
  ];
  return (
    <div className="my-20 px-2 lg:px-0 bg-black text-white">
      <div className="lg:max-w-screen-2xl mx-auto py-16 flex justify-between">
        {listOfServices?.map((items) => (
          <div key={items?.id}>
            <div className="lg:px-5 py-2 transition ease-in-out duration-300 hover:duration-300 hover:scale-105 uppercase text-center">
              <FontAwesomeIcon
                icon={items.itemIcon}
                className="lg:w-8 h-6 pb-2"
              />
              <br />
              <span className="text-xs lg:text-base">{items.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTools;
