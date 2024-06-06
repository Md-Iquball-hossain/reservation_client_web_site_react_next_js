"use client";
import { faHotel, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageTranslate from "./LanguageTranslate";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
const TopNavbar = () => {
  const router = useRouter();
  const [loggedOut, setLoggedOut] = useState(false);
  const accessUserToken: string = localStorage.getItem("access-token")!;
  useEffect(() => {
    if (loggedOut) {
      setLoggedOut(false);
    }
  }, [loggedOut]);

  // useEffect(() => {
  //   // Check if localStorage is available before accessing it
  //   if (typeof window !== "undefined") {
  //     const accessUserToken: string | null =
  //       localStorage.getItem("access-token");
  //     if (accessUserToken) {
  //       setLoggedOut(true);
  //     } else {
  //       setLoggedOut(false);
  //     }
  //   }
  // }, []);

  const handleLogout = () => {
    enqueueSnackbar("Logout Successful");
    deleteCookie("logged");
    localStorage.removeItem("access-token");
    setLoggedOut(true);
    router.push("/");
  };

  return (
    <div className="bg-black text-white">
      <div className="max-w-screen-2xl mx-auto py-4 px-1 lg:px-16">
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="w-5" />
            <p>
              M360 ICT HOTELS ( 1 888 424 6835 ){" "}
              <span className="ps-6 hidden lg:inline-block">Need help ?</span>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden lg:block">{/* <LanguageTranslate /> */}</div>
            {accessUserToken && (
              <Link
                href={`/profile/myhotel`}
                className=" me-8 flex items-center"
              >
                <FontAwesomeIcon icon={faHotel} className="me-2 w-6" />
                <span>My Stays</span>
              </Link>
            )}
            {accessUserToken && (
              <Link
                href="/profile"
                className="border px-4 py-2 rounded text-white"
              >
                Profile
              </Link>
            )}
            <div className="">
              {accessUserToken ? (
                <button
                  onClick={handleLogout}
                  className="border px-4 py-2 rounded text-white"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  href="/login"
                  className="border px-4 py-2 rounded text-white"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
