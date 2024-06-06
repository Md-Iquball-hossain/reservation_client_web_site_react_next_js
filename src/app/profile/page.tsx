"use client";
import Image from "next/image";
import blankDp from "../../../public/assests/blan-pro.jpg";
import { useGetProfile } from "@/lib/serverApiCall";
import { useEffect, useState } from "react";
import { IMG_URl } from "@/lib/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserPen } from "@fortawesome/free-solid-svg-icons";
import ProfileUpdate from "./ProfileUpdate";

const Profile = () => {
  //  const  accessToken = localStorage.getItem("access-token");
  // const fetchDatapr = async () => {
  //   try {
  //     const profileInfoResponse = await ServerApGetProfile({
  //       api: "/auth/hotel-user/profile",
  //     });

  //     // Extract data from the response
  //     const profileInfo = profileInfoResponse.data;

  //     console.log("profile", profileInfo);
  //   } catch (error) {
  //     console.log("Error fetching profile info:", error);
  //   }
  // };

  // fetchDatapr();
  const [profile, refetch, isLoading] = useGetProfile();
  refetch();
  const [profileEdit, setProfileEdit] = useState(false);

  const {
    address,
    city,
    country,
    email,
    name,
    phone,
    photo,
    status,
    zip_code,
    postal_code,
    nid_no,
    passport_no,
  } = profile?.data || {};

  console.log("profile", profile);
  // useEffect(() => {
  //   const profile = fetch(`${BASE_URl}/auth/hotel-user/profile`, {
  //     headers: {
  //       web_token: `Bearer ${token}`,
  //     },
  //   });
  //   console.log("pro", profile);
  // }, []);

  return (
    <div>
      <div className="flex items-center justify-between text-black">
        <h1 className="text-4xl lg:text-6xl font-semibold">Profile</h1>
        <FontAwesomeIcon
          onClick={() => setProfileEdit(!profileEdit)}
          icon={!profileEdit ? faEdit : faUserPen}
          className="w-10"
        />
      </div>
      <hr className="my-4" />

      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 mr-3 bg-baseBgColor"
          viewBox="0 0 24 24"
        ></svg>
      ) : (
        <>
          {profileEdit ? (
            <ProfileUpdate
              refetch={refetch}
              profile={profile?.data}
              setProfileEdit={setProfileEdit}
              profileEdit={profileEdit}
            />
          ) : (
            <div className=" grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">Name</h1>
                  <p>: {name || "N/A"}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">Email</h1>
                  <p>: {email || "N/A"}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">Phone</h1>
                  <p>: {phone || "N/A"}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">NID Number</h1>
                  <p>: {nid_no || "N/A"}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">Passport Number</h1>
                  <p>: {passport_no || "N/A"}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">Address</h1>
                  <p>
                    :{" "}
                    {address?.charAt(0)?.toUpperCase() + address?.slice(1) ||
                      "N/A"}
                  </p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">City</h1>
                  <p>
                    : {city?.charAt(0)?.toUpperCase() + city?.slice(1) || "N/A"}
                  </p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">Country</h1>
                  <p>
                    :{" "}
                    {country?.charAt(0)?.toUpperCase() + country?.slice(1) ||
                      "N/A"}
                  </p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">Zip Code</h1>
                  <p>: {zip_code || "N/A"}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">Postal Code</h1>
                  <p>: {postal_code || "N/A"}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="font-semibold  w-[8rem]">Status</h1>
                  <p>
                    :{" "}
                    {status?.charAt(0)?.toUpperCase() + status?.slice(1) || "N/A"}
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={photo ? `${IMG_URl}${photo}` : blankDp}
                  alt="DP"
                  width={200}
                  height={200}
                  className="rounded-full w-[10rem] h-[10rem] object-cover"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
