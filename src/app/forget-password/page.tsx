"use client";
import { ServerApiPostCall } from "@/lib/serverApiCall";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import forgotpassword2 from "../../../public/assests/forgotpassword2.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  type: string;
};

const ForgotPassword = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const fullData = { ...data, type: "forget_h_user" };
    try {
      const response = await ServerApiPostCall({
        api: "/common/send-email-otp",
        data: fullData,
      });
      console.log("data", fullData);
      if (response?.data?.success) {
        localStorage.setItem("email", data?.email);
        enqueueSnackbar(response?.data?.message, { variant: "success" });
        router.push(`/send-otp`);
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
                Forgot Your
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
              Forgot Password ?
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8 w-[25rem]">
                <label>Email :</label>
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

export default ForgotPassword;
