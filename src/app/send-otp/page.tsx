"use client";
import { ServerApiPostCall } from "@/lib/serverApiCall";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import forgotpassword2 from "../../../public/assests/forgotpassword2.jpg";
import Link from "next/link";
// import { useRouter } from "next/router";

type Inputs = {
  otp: string;
  type: string;
};

const SendOtp = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const email: string = localStorage.getItem("email")!;
    const fullData = { ...data, type: "forget_h_user", email: email };
    try {
      const response = await ServerApiPostCall({
        api: "/common/match-email-otp",
        data: fullData,
      });
      
      if (response?.data?.success) {
          router.push(`/change-password`);
        localStorage.setItem("change-password-token", response?.data?.token);
        enqueueSnackbar(response?.data?.message, { variant: "success" });
      }
    } catch (error: any) {
      enqueueSnackbar(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <div className="lg:max-w-screen-2xl mx-auto min-h-screen grid place-items-center">
        <div className="lg:grid lg:grid-cols-2 w-[25rem] lg:w-[60rem] shadow-lg">
          <div>
            <div className="relative">
              <Image
                src={forgotpassword2}
                width={700}
                // height={100}
                alt="forgot_password"
                className="brightness-50 rounded drop-shadow-2xl h-[35rem] "
              />
            </div>
            <div className="absolute text-white bottom-[8rem] text-left w-[480px] px-10">
              <h1 className="text-5xl font-bold">
                Send
                <br />
                Password
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
          <div className="flex flex-col items-center justify-center border h-[35rem]">
            <p className="text-2xl font-semibold text-baseTextColor pb-5">
              Send Otp ?
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8 w-[25rem]">
                <label>OTP :</label>
                <br />
                <input
                  type="number"
                  {...register("otp", { required: true })}
                  className="border py-1 px-4 focus:outline-none mt-2 w-full "
                  placeholder="Enter Your otp"
                />
                {errors.otp?.type === "required" && (
                  <p role="alert">Otp is required</p>
                )}
              </div>
              <input
                type="submit"
                className="border w-[25rem] py-2 bg-baseBgColor text-white hover:bg-white hover:text-baseTextColor duration-300 hover:duration-300 hover:font-bold"
              />
            </form>
            {/* <div className="flex justify-center pt-5 w-[25rem]">
              <span className="text-baseTextColor underline">
                <Link href="/login"> Login </Link>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOtp;
