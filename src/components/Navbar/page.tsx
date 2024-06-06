/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import logo from "../../../public/assests/logo (2).png";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MyItem {
  id: number;
  title: string;
  path: string;
}

const Navbar = () => {
  const listOfServices: MyItem[] = [
    {
      id: 1,
      title: "Home",
      path: "/",
      // itemIcon: faBed,
    },
    {
      id: 2,
      title: "Rooms & suits",
      path: "/room-list",
      // itemIcon: faPlane,
    },
    {
      id: 3,
      title: "Services",
      path: "/service",
      // itemIcon: faCar,
    },
    {
      id: 4,
      title: "Gallery",
      path: "/gallery",
      // itemIcon: faTaxi,
    },
    {
      id: 5,
      title: "about us",
      path: "/about",
      // itemIcon: faTaxi,
    },
    {
      id: 5,
      title: "contact",
      path: "/contact",
      // itemIcon: faTaxi,
    },
  ];

  // const [loggedOut, setLoggedOut] = useState(false);

  // useEffect(() => {
  //   const accessUserToken: string | null =
  //     localStorage?.getItem("access-token");
  //   if (accessUserToken) {
  //     setLoggedOut(true);
  //   } else {
  //     setLoggedOut(false); // If access token is present, set loggedOut to false
  //   }
  // }, [loggedOut]);

  // console.log("ass", loggedOut);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto bg-white flex items-center justify-between text-black">
        <Link href="/">
          <Image src={logo} alt="booking-logo" width={100} height={10} />
        </Link>
        <div className="flex items-center space-x-5">
          {listOfServices?.map((items) => (
            <div key={items?.id}>
              <div className="px-5 py-2 flex items-center hover:border-b-2 hover:border-baseTextColor transition ease-in-out duration-300 hover:duration-300 hover:scale-105  uppercase">
                {/* <FontAwesomeIcon icon={items.itemIcon} className="me-4 w-6 " /> */}
                <Link href={items?.path}>{items.title}</Link>
              </div>
            </div>
          ))}

          {/* {loggedOut && (
            <div className="space-x-5 lg:block hidden">
              <Link
                href="/profile"
                className="border px-4 py-2 rounded bg-baseBgColor text-white"
              >
                Profile
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
