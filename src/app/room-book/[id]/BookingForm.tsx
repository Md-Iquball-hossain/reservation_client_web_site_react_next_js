"use client";
import { ServerApiBookingPostCall } from "@/lib/serverApiCall";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  name: string;
  country: string;
  email: string;
  address: string;
  phone: string;
  postal_code: string;
  city: string;
  // card_number: string;
  // month: string;
  // year: string;
  total_occupancy: number;
  nid_no: string;
  passport_no: string;
  check_in_time: string;
  check_out_time: string;
};

interface Country {
  name: {
    common: string;
  };
}

const BookingForm = ({ params, setSelectedItem, bookingInfoData }: any) => {
  const accessUserToken: string | null = localStorage?.getItem("access-token");
  const router = useRouter();
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkDate, setCheckDate] = useState<any>({
    checkInDate: "",
    checkOutDate: "",
  });
  setSelectedItem(checkDate);
  // console.log('aaaa',bookingInfoData)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const fullData = {
      ...data,
      paid_amount: 0,
      discount_amount: bookingInfoData?.discount_amount,
      extra_charge: bookingInfoData?.extra_charge,
      tax_amount: bookingInfoData?.tax_amount,
      booking_rooms: [{ room_id: params }],
    };

    const accessUserToken: string | null =
      localStorage?.getItem("access-token");
    if (!accessUserToken) {
      router.push("/login");
    } else {
      try {
        const response = ServerApiBookingPostCall({
          api: "/reservation-client/room-booking",
          data: fullData,
        });
        if (await response) {
          enqueueSnackbar("Room Booking Confimed", { variant: "success" });
          router.push(`/profile/myhotel`);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
    <div className="shadow-lg px-4 lg:py-5 rounded">
      <p className="lg:text-2xl">
        You selected an IHG® One Rewards member rate.
      </p>
      <div className="pt-2 lg:grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <p>
            <span className="font-semibold">
              <Link href={`/registration`}>Not a member?</Link>
            </span>{" "}
            Sign up for free as you book to enjoy{" "}
            <span className="underline text-baseTextColor">
              these benefits.
            </span>{" "}
            See{" "}
            <span className="underline text-baseTextColor">
              Terms and Conditions
            </span>{" "}
            below.
          </p>
        </div>
        <div className="col-span-1 ">
          {!accessUserToken && (
            <>
              <span className="font-semibold"> Already a member?</span>
              <span className="underline text-baseTextColor">
                <Link href={"/login"}>Sign In.</Link>
              </span>
            </>
          )}
        </div>
      </div>

      <div className="py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* check in & out time */}
          <div className="lg:flex lg:items-center lg:justify-between space-y-5 lg:space-y-0">
            <div>
              <label>Check-in Time</label>
              <br />
              <Controller
                control={control}
                name="check_in_time"
                // defaultValue={undefined}
                render={({ field: { onChange, value } }) => (
                  <ReactDatePicker
                    className="border my-2 py-2 px-4 w-[29rem] lg:w-[30rem]"
                    selected={value ? new Date(value) : null}
                    dateFormat="yyyy-MM-dd"
                    onChange={(date) => {
                      const formattedDate = date
                        ? date.toISOString().split("T")[0]
                        : null;
                      onChange(formattedDate);
                      setCheckDate((prevState: any) => ({
                        ...prevState,
                        checkInDate: formattedDate,
                      }));
                    }}
                    placeholderText="Select check-in time"
                    required
                  />
                )}
              />
            </div>
            <div>
              <label>Check-out Time</label>
              <br />
              <Controller
                control={control}
                name="check_out_time"
                // defaultValue={undefined}
                render={({ field: { onChange, value } }) => (
                  <ReactDatePicker
                    className="border my-2 py-2 px-4 w-[29rem] lg:w-[30rem]"
                    selected={value ? new Date(value) : null}
                    dateFormat="yyyy-MM-dd"
                    onChange={(date) => {
                      const formattedDate = date
                        ? date.toISOString().split("T")[0]
                        : null;
                      onChange(formattedDate);
                      setCheckDate((prevState: any) => ({
                        ...prevState,
                        checkOutDate: formattedDate,
                      }));
                    }}
                    placeholderText="Select check-in time"
                    required
                  />
                )}
              />
            </div>
          </div>
          {/* First name */}
          <div className="lg:flex lg:items-center lg:justify-between space-y-5 lg:space-y-0">
            <div>
              <label>Name</label>
              <br />
              <input
                className="border my-2 py-2 px-4 w-[29rem] lg:w-[30rem]"
                placeholder="Enter your  Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500"> Name is required</span>
              )}
            </div>
            {/* Email */}
            <div>
              <label>Email</label>
              <br />
              <input
                className="border my-2 py-2 px-4 w-[29rem] lg:w-[30rem]"
                placeholder="Enter your Email"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500"> Email is required</span>
              )}
            </div>
          </div>

          {/* Country & number */}
          <div className="lg:flex lg:items-center lg:justify-between space-y-5 lg:space-y-0">
            <div>
              <label>Country/Region</label>
              <br />
              <select
                className="border my-2 py-2 px-4 w-[29rem] lg:w-[30rem]"
                {...register("country")}
              >
                <option value="">Select a country</option>
                {loading ? (
                  <option>Loading...</option>
                ) : (
                  countries.map((country): any => (
                    <option
                      key={country?.name?.common}
                      value={country?.name.common}
                    >
                      {country?.name?.common}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div>
              <label>Phone Number</label>
              <br />
              <input
                className="border my-2 py-2 px-4 w-[29rem] lg:w-[30rem]"
                placeholder="Enter your Phone Number"
                type="number"
                {...register("phone")}
              />
            </div>
          </div>

          {/* nid_no */}
          <div className="lg:flex lg:items-center lg:justify-between space-y-5 lg:space-y-0">
            <div>
              <label>NID Number</label>
              <br />
              <input
                className="border my-2 py-2 px-4 w-[29rem] lg:w-[30rem]"
                placeholder="Enter your  NID Number"
                {...register("nid_no", { required: true })}
              />
              {errors.nid_no && (
                <span className="text-red-500"> NID Number is required</span>
              )}
            </div>
            {/* passport_no */}
            <div>
              <label>Passport Number</label>
              <br />
              <input
                className="border my-2 py-2 px-4 w-[29rem] lg:w-[30rem]"
                placeholder="Enter your Passport Number"
                type="text"
                {...register("passport_no")}
              />
              {errors.passport_no && (
                <span className="text-red-500">
                  {" "}
                  Passport Number is required
                </span>
              )}
            </div>
          </div>

          {/* total_occupancy */}
          <div>
            <label>Total Occupancy</label>
            <br />
            <input
              className="border my-2 py-2 px-4 w-full"
              placeholder="Enter your Total Occupancy"
              type="number"
              {...register("total_occupancy", { required: true })}
            />
            {errors.total_occupancy && (
              <span className="text-red-500">
                {" "}
                Total Occupancy Number is required
              </span>
            )}
          </div>
          {/* Address */}
          <div>
            <label>Address</label>
            <br />
            <input
              className="border my-2 py-2 px-4 w-full"
              placeholder="Enter your Address"
              type="text"
              {...register("address")}
            />
          </div>
          {/* City/Town */}
          <div>
            <label>City/Town</label>
            <br />
            <input
              className="border my-2 py-2 px-4 w-full"
              placeholder="Enter your City/Town"
              type="text"
              {...register("city")}
            />
          </div>
          {/* Postal Code */}
          <div>
            <label>Postal Code</label>
            <br />
            <input
              className="border my-2 py-2 px-4 w-full"
              placeholder="Enter your Postal Code"
              type="text"
              {...register("postal_code")}
            />
          </div>

          <div className="py-10">
            <p className="text-2xl font-semibold">How would you like to pay?</p>
            <div className="my-2 space-y-2">
              <p>Reserve with payment card</p>
              <p>
                Your room will be held until your arrival on the day of your
                check-in.
              </p>
            </div>
            {/* <div className="grid grid-cols-3 gap-4 my-5">
              <div className="col-span-2">
                Card Number
                <div>
                  <label className="font-semibold">Card Number</label>
                  <br />
                  <input
                    className="border my-2 py-2 px-4 w-full"
                    placeholder="Enter your Postal Code"
                    type="text"
                    {...register("card_number")}
                  />
                </div>
              </div>
              <div className="col-span-1">
                Expiration
                <div>
                  <label className="font-semibold">Expiration</label>
                  <br />
                  <div className="flex ">
                    <input
                      className="border my-2 py-2 px-4 w-full"
                      placeholder="Enter Month"
                      type="text"
                      {...register("month")}
                    />
                    <input
                      className="border my-2 py-2 px-4 w-full"
                      placeholder="Enter year"
                      type="text"
                      {...register("year")}
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div>
            <p className="text-3xl ">Terms and Conditions</p>
            <div className="py-5 space-y-5">
              <p>
                By booking I certify that I have read and accept the{" "}
                <span className="text-baseTextColor underline">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="text-baseTextColor underline">
                  Privacy Statement
                </span>{" "}
                and I have read and understand the Rate Description and Rate
                Rules for my reservation.
              </p>
              <p>
                I am at least 18 years of age and at least one guest in my party
                will meet the minimum check-in age requirement for the hotel
                upon arrival.
              </p>
              <p>*Minimum Check-In Age: 18</p>
              <p>
                By joining IHG One Rewards I certify that I have read and accept
                the{" "}
                <span className="underline text-baseTextColor">
                  IHG One Rewards Membership Terms and Conditions
                </span>
                ,{" "}
                <span className="underline text-baseTextColor">
                  Privacy Statement
                </span>{" "}
                and{" "}
                <span className="underline text-baseTextColor">
                  California Notice of Financial Incentive
                </span>
                .
              </p>
            </div>
          </div>
          {/* 


          <input {...register("exampleRequired", { required: true })} />
     
          {errors.exampleRequired && <span>This field is required</span>} */}

          {/* <input
            type="submit"
            className="border flex  justify-center py-2 w-full bg-baseBgColor text-white hover:bg-white hover:text-baseTextColor duration hover:duration-300"
          /> */}

          <input
            type="submit"
            className="border flex  justify-center py-2 w-full bg-baseBgColor text-white hover:bg-white hover:text-baseTextColor duration hover:duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
