"use client";
import { ServerApiPatchProfile, ServerApiPostCall } from "@/lib/serverApiCall";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ProfileUpdate = ({
  profile,
  setProfileEdit,
  profileEdit,
  refetch
}: any) => {
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
  } = profile || {};

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountryList = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setCountryList(data);
    };
    fetchCountryList();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    const { photo, ...rest } = data;
    const formData = new FormData();
    if (photo?.length) {
      formData.append("photo", photo[0]);
    }
    for (const key in rest) {
      if (rest[key]) {
        formData.append(key, rest[key]);
      }
    }
    try {
      const response = await ServerApiPatchProfile({
        api: "/auth/hotel-user/profile",
        data: formData,
      });
      if (response?.data?.success) {
        console.log("res", response);
        enqueueSnackbar(response?.data?.message, { variant: "success" });
        refetch()
        setProfileEdit(!profileEdit);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-10">
          <div className="mb-8 w-[35rem]">
            <label>Name :</label>
            <br />
            <input
              type="text"
              {...register("name")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your Name"
              defaultValue={name}
            />
          </div>
          <div className="mb-8 w-[35rem]">
            <label>Email :</label>
            <br />
            <input
              type="email"
              {...register("email")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your Email"
              defaultValue={email}
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="mb-8 w-[35rem]">
            <label>Address :</label>
            <br />
            <input
              type="text"
              {...register("address")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your Address"
              defaultValue={address}
            />
          </div>
          <div className="mb-8 w-[35rem]">
            <label>City :</label>
            <br />
            <input
              type="text"
              {...register("city")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your city"
              defaultValue={city}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {/* country */}
          <div className="mb-8 w-[35rem]">
            <label>Country </label>
            <br />
            <select
              {...register("country")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full"
              defaultValue={country}
            >
              <option value="">Select Country</option>
              {countryList?.map((country: any) => (
                <option
                  key={country?.name?.common}
                  value={country?.name?.common}
                >
                  {country?.name?.common}
                </option>
              ))}
            </select>
          </div>
          {/* zip_code */}
          <div className="mb-8 w-[35rem]]">
            <label>Zip Code </label>
            <br />
            <input
              type="text"
              {...register("zip_code")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your zip_code"
              defaultValue={zip_code}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="mb-8 w-[35rem]">
            <label>Phone :</label>
            <br />
            <input
              type="number"
              {...register("phone")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your Phone"
              defaultValue={phone}
            />
          </div>
          <div className="mb-8 w-[35rem]">
            <label>Postal Number :</label>
            <br />
            <input
              type="text"
              {...register("postal_code")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your Postal Number"
              defaultValue={postal_code}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="mb-8 w-[35rem]">
            <label>Passport Number :</label>
            <br />
            <input
              type="number"
              {...register("passport_no")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your Passport Number"
              defaultValue={passport_no}
            />
          </div>
          <div className="mb-8 w-[35rem]">
            <label>Nid Number :</label>
            <br />
            <input
              type="text"
              {...register("nid_no")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your Nid Number"
              defaultValue={nid_no}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="mb-8 w-[35rem]">
            <label>Photo:</label>
            <br />
            <input
              type="file"
              accept="image/*"
              {...register("photo")}
              className="border py-1 px-4 focus:outline-none mt-2 w-full"
              // onChange={handlePhotoChange}
            />
          </div>
        </div>

        <input
          type="submit"
          //   value="Update"
          className="border w-[35rem] py-2 bg-baseBgColor text-white hover:bg-white hover:text-baseTextColor duration-300 hover:duration-300 hover:font-bold"
        />
      </form>
    </div>
  );
};

export default ProfileUpdate;
