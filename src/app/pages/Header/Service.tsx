import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MyItem {
  id: number;
  itemIcon: IconProp;
  title: string;
}

const Service = () => {
  const listOfServices: MyItem[] = [
    {
      id: 1,
      title: "Stays",
      itemIcon: faBed,
    },
    {
      id: 2,
      title: "Flights",
      itemIcon: faPlane,
    },
    {
      id: 3,
      title: "Car Rentals",
      itemIcon: faCar,
    },
    {
      id: 4,
      title: "Airports Taxi",
      itemIcon: faTaxi,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 lg:flex gap-5 py-10 h-[6rem] ">
        {listOfServices?.map((items) => (
          <div key={items?.id}>
            <div className="px-5 py-2 flex items-center hover:border-b-2 transition ease-in-out duration-300 hover:duration-300 hover:scale-105">
              <FontAwesomeIcon icon={items.itemIcon} className="me-4 w-6 " />
              <span>{items.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
