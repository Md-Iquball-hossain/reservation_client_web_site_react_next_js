"use client";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import taj from "../../../public/assests/taj.png";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ServerApiPostCall } from "@/lib/serverApiCall";

type registration = {
  name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  photo: File;
  address: string;
  phone: string;
};

const Registration = () => {
  const [showPassword, setShowPassword] = useState(true);
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
  } = useForm<registration>();

  const onSubmit: SubmitHandler<registration> = async (data: any) => {
    const { photo, ...rest } = data;
    const fromData = new FormData();
    if (photo?.length) {
      fromData.append("photo", photo[0]);
    }

    for (const key in rest) {
      if (rest[key]) {
        fromData.append(key, rest[key]);
      }
    }
    try {
      const response = await ServerApiPostCall({
        api: "/auth/hotel-user/registration",
        data: fromData,
      });

      if (response?.data?.success) {
        console.log(response?.data?.message);
      }

      signIn("credentials", {
        email: (await response).data.email,
        password: (await response).data.password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // const handlePhotoChange = (e: any) => {
  //   const file = e.target.files?.[0]; // Null check to prevent potential errors
  //   if (file) {
  //     // You can do further processing here if needed
  //   }
  // };
  return (
    <div>
      <div className="lg:max-w-screen-2xl mx-auto min-h-screen grid place-items-center text-black">
        <div className="lg:grid lg:grid-cols-2 w-[25rem] lg:w-[60rem] shadow-lg">
          <div>
            <div className="relative">
              <Image
                src={taj}
                alt="Registration"
                className="brightness-50 rounded drop-shadow-2xl h-[48rem] "
              />
            </div>
            <div className="absolute text-white bottom-[8rem] text-left w-[480px] px-10">
              <h1 className="text-5xl font-bold">
                Make Your
                <br />
                Reservation
              </h1>
              <p className=" pt-6  ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                natus nemo illum necessitatibus ratione quas eos ducimus
                cupiditate quod amet?
              </p>
              <p className=" pt-6  ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                natus nemo illum necessitatibus ratione quas eos ducimus
                cupiditate quod amet?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border h-[48rem]">
            {/* <p className="text-2xl font-semibold text-baseTextColor pb-5">
              Hello Guest
            </p> */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 w-[25rem]">
                <label>Name </label>
                <br />
                <input
                  type="text"
                  {...register("name" , { required: true })}
                  className="border py-1 px-4 focus:outline-none mt-2 w-full "
                  placeholder="Enter Your name"
                />
              </div>
              <div className="mb-4 w-[25rem]">
                <label>Email </label>
                <br />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="border py-1 px-4 focus:outline-none mt-2 w-full "
                  placeholder="Enter Your Email"
                />
                {errors.email?.type === "required" && (
                  <p role="alert">Email is required</p>
                )}
              </div>
              <div className="mb-4 relative w-[25rem]">
                <label>Password </label>
                <br />
                {showPassword ? (
                  <input
                    type="password"
                    {...register("password", { required: true, maxLength: 20 })}
                    className="border py-1 px-4 focus:outline-none mt-2 w-full"
                    placeholder="Enter Your Password"
                  />
                ) : (
                  <input
                    type="text"
                    {...(register("password"),
                    { required: true, maxLength: 20 })}
                    className="border py-1 px-4 focus:outline-none mt-2 w-full "
                    placeholder="Enter Your Password"
                  />
                )}
                {errors.password?.type === "required" && (
                  <p role="alert">Password is required</p>
                )}
                <div className="absolute top-9 right-5 lg:top-9 lg:right-6 ">
                  {!showPassword ? (
                    <button onClick={toggleShowPassword}>
                      <FontAwesomeIcon icon={faEyeSlash} />
                    </button>
                  ) : (
                    <button onClick={toggleShowPassword}>
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  )}
                </div>
              </div>
              <div className="mb-4 w-[25rem]">
                <label>Phone </label>
                <br />
                <input
                  type="number"
                  {...register("phone")}
                  className="border py-1 px-4 focus:outline-none mt-2 w-full "
                  placeholder="Enter Your Phone"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                {/* country */}
                <div className=" w-[12rem]">
                  <label>Country </label>
                  <br />
                  <select
                    {...register("country")}
                    className="border py-1 px-4 focus:outline-none mt-2 w-full"
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
                {/* city */}
                <div className=" w-[12rem]">
                  <label>City </label>
                  <br />
                  <input
                    type="text"
                    {...register("city")}
                    className="border py-1 px-4 focus:outline-none mt-2 w-full "
                    placeholder="Enter Your city"
                  />
                </div>
              </div>
              <div className="mb-4 w-[25rem]">
                <label>Address </label>
                <br />
                <input
                  {...register("address")}
                  className="border py-1 px-4 focus:outline-none mt-2 w-full"
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="mb-4 w-[25rem]">
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
              <input
                type="submit"
                className="border w-[25rem] py-2 bg-baseBgColor text-white hover:bg-white hover:text-baseTextColor duration-300 hover:duration-300 hover:font-bold"
              />
            </form>
            <div className="pt-5 w-[25rem]">
              <p>
                New an User ?{" "}
                <span className="text-baseTextColor underline">
                  <Link href="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
