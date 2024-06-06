"use client";
import { ServerApiPostProfile } from "@/lib/serverApiCall";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  old_password: string;
  new_password: string;
};

const ChangePasswordForUser = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await ServerApiPostProfile({
        api: "/auth/hotel-user/change-password",
        data: data,
      });

      if (response?.data?.success) {
        router.push(`/login`);
        localStorage.removeItem("access-token");
        enqueueSnackbar(response?.data?.message, { variant: "success" });
      }
    } catch (error: any) {
      enqueueSnackbar(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <div className="mb-8 w-[25rem]">
            <label>Old Password :</label>
            <br />
            <input
              type="text"
              {...register("old_password", { required: true })}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your Old Password"
            />
            {errors.old_password?.type === "required" && (
              <p role="alert">Old Password is required</p>
            )}
          </div>
          <div className="mb-8 w-[25rem]">
            <label>New Password :</label>
            <br />
            <input
              type="text"
              {...register("new_password", { required: true })}
              className="border py-1 px-4 focus:outline-none mt-2 w-full "
              placeholder="Enter Your Old Password"
            />
            {errors.new_password?.type === "required" && (
              <p role="alert">New Password is required</p>
            )}
          </div>
        </div>
        <input
          type="submit"
          className="border w-[25rem] py-2 bg-baseBgColor text-white hover:bg-white hover:text-baseTextColor duration-300 hover:duration-300 hover:font-bold"
        />
      </form>
    </div>
  );
};

export default ChangePasswordForUser;
