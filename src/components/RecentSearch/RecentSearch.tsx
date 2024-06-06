import React from "react";
import CommonTitle from "../commonTitle/Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const RecentSearch = () => {
  return (
    <div className="my-20">
      <div className="lg:max-w-screen-2xl mx-auto ">
        <div>
          <CommonTitle
            title="Your Recent Search"
            description="Search your Favourite Place , Book your Favourite Hotel"
          />
        </div>
        <div className="flex space-x-5">
          <div className="border flex items-center w-[20rem] space-x-5 px-2 py-6 rounded-lg mt-5">
            <div>
              <FontAwesomeIcon icon={faBuilding} className="w-12 h-6 " />
            </div>
            <div>
              <p className="text-xl font-semibold">Stays in Dubai</p>
              <p className="">Fri, 16 Feb - Sun, 18 Feb</p>
              <p className="">2 Travellers . 1 Room</p>
            </div>
          </div>
          <div className="border flex items-center w-[20rem] space-x-5 px-2 py-6 rounded-lg mt-5">
            <div>
              <FontAwesomeIcon icon={faBuilding} className="w-12 h-6 " />
            </div>
            <div>
              <p className="text-xl font-semibold">Stays in China</p>
              <p className="">Fri, 20 Feb - Sun, 24 Feb</p>
              <p className="">4 Travellers . 1 Room</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearch;
