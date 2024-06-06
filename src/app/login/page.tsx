"use client";
import { ServerApiPostCall } from "@/lib/serverApiCall";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import taj from "../../../public/assests/taj.png";
import { setCookie } from "cookies-next";

type Inputs = {
  email: string;
  password: string;
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await ServerApiPostCall({
        api: "/auth/hotel-user/login",
        data: data,
      });

      // signIn("credentials", {
      //   email: data?.email,
      //   password: data?.password,
      //   redirect: false,
      //   // callbackUrl: "/",
      // });

      // await signIn("credentials", {
      //   email: data.email,
      //   password: data.password,
      //   redirect: true,
      //   callbackUrl: "/",
      // });

      console.log("data", data);

      if (response?.data?.success) {
        enqueueSnackbar(response?.data?.message, { variant: "success" });
        setCookie("logged", "true");
        localStorage.setItem("access-token", response?.data?.token);
        window.location.href = "/";
      }
    } catch (error: any) {
      enqueueSnackbar(error?.response?.data?.message);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="lg:max-w-screen-2xl mx-auto min-h-screen grid place-items-center text-black">
        <div className="lg:grid lg:grid-cols-2 w-[25rem] lg:w-[60rem] shadow-lg">
          <div>
            <div className="relative">
              <Image
                src={taj}
                alt="Registration"
                className="brightness-50 rounded drop-shadow-2xl h-[35rem] "
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
          <div className="flex flex-col items-center justify-center border h-[35rem]">
            <p className="text-2xl font-semibold text-baseTextColor pb-5">
              Hello Guest
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
              <div className="mb-8 relative w-[25rem]">
                <label>Password :</label>
                <br />
                <input
                  type={showPassword ? "password" : "text"}
                  {...register("password", { required: true, maxLength: 20 })}
                  className="border py-1 px-4 focus:outline-none mt-2 w-full"
                  placeholder="Enter Your Password"
                />
                {errors.password?.type === "required" && (
                  <p role="alert">Password is required</p>
                )}
                <div className="absolute top-9 right-5 lg:top-9 lg:right-6 ">
                  {!showPassword ? (
                    <button type="button" onClick={toggleShowPassword}>
                      <FontAwesomeIcon icon={faEyeSlash} />
                    </button>
                  ) : (
                    <button type="button" onClick={toggleShowPassword}>
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  )}
                </div>
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
                  <Link href="/registration">REGISTRATION</Link>
                </span>
              </p>
              <span className="text-baseTextColor underline">
                <Link href="/forget-password">Forgot Password ?</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
