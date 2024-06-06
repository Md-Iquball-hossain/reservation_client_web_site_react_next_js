"use client";
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faBed,
  faCalendarWeek,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {
  DayRange,
} from "@hassanmojab/react-modern-calendar-datepicker";
import Link from "next/link";

import { ContextApiProviders } from "@/providers/ContextProviders";

import "react-modern-calendar-datepicker/lib/DatePicker.css";

type Inputs = {
  example: string;
  exampleRequired: string;
  checkInDate: string;
  checkOutDate: string;
  gender: string;
};
const SearchBar = () => {
  const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
    from: null,
    to: null,
  });

  const [selectedToDayRange, setSelectedToDayRange] = useState<DayRange>({
    from: null,
    to: null,
  });

  console.log("selectedDayRange", selectedDayRange);

  const [roomSelected, setRoomSelected] = useState(false);
  const [personSelected, setPersonSelected] = useState({
    adult: 1,
    child: 1,
    selectedAge: 0,
    // rooms: 1,
  });

  const {
    filterItem,
    setfilterItem,
    adultchild,
    adultchildItem,
    queryParams,
  }: any = useContext(ContextApiProviders);

  const handleSelectAge = (event: any) => {
    const selectedAge = parseInt(event.target.value);
    setPersonSelected({ ...personSelected, selectedAge });
  };

  const ages = Array.from({ length: 18 }, (_, i) => i);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="rounded bg-white text-black lg:w-[70rem] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:grid lg:grid-cols-3"
      >
        {/* <div className="border rounded py-5">
          <FontAwesomeIcon
            icon={faBed}
            className="mx-5 w-6 text-baseTextColor"
          />
          <input
            className="w-3/4  border-none focus:outline-none"
            placeholder="Where are you going ?"
            {...register("example")}
          />
        </div> */}
        <div className="border rounded py-5  ">
          <FontAwesomeIcon
            icon={faCalendarWeek}
            className="mx-5 w-6 text-baseTextColor"
          />
          <DatePicker
            // value={selectedDayRange}
            // onChange={setSelectedDayRange}
            value={selectedDayRange?.from as any} // Display only the "from" date
            onChange={(from) => setSelectedDayRange({ from, to: null })} // Update only the "from" date
            inputPlaceholder="Select Check In"
            shouldHighlightWeekends
            colorPrimary="#25A2BA"
            inputClassName="custom-datepicker-input"
          />
        </div>
        <div className="border rounded py-5  ">
          <FontAwesomeIcon
            icon={faCalendarWeek}
            className="mx-5 w-6 text-baseTextColor"
          />

          <DatePicker
            // value={selectedToDayRange}
            // onChange={setSelectedToDayRange as any}
            value={selectedToDayRange?.to as any} // Display only the "from" date
            onChange={(to) => setSelectedToDayRange({ from: null, to })} // Update only the "from" date
            minimumDate={selectedDayRange?.from as any}
            inputPlaceholder="Select Check Out"
            shouldHighlightWeekends
            colorPrimary="#25A2BA"
            inputClassName="custom-datepicker-input"
          />
        </div>
        <div className="rounded flex">
          <div className="w-[18rem] border py-5 flex items-center pointer relative">
            <FontAwesomeIcon
              icon={faUser}
              className="mx-5 w-6 text-baseTextColor"
            />
            <div
              className="flex items-center  justify-between w-[16rem] relative"
              onClick={() => setRoomSelected(!roomSelected)}
            >
              <p>
                {filterItem?.adult || 0} Adult . {filterItem?.child || 0} Child
                {/* {personSelected?.rooms} rooms */}
              </p>
              <p>
                {roomSelected ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
          </div>
          <Link
            href={`/room-list`}
            className="w-[10rem] px-4 border bg-baseBgColor text-white flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="me-4" />
            <button>Search</button>
          </Link>
        </div>
      </form>

      {roomSelected && (
        <div className="border lg:w-[22rem] absolute rounded right-[21.5rem] py-8 px-6 shadow cursor space-y-2 z-10 bg-white">
          {/* adult */}
          <div className="flex items-center justify-between">
            <p>Adult</p>
            <div className="border flex items-center space-x-8 px-4 py-2 rounded text-xl">
              <button
                onClick={() =>
                  adultchild.adult > 1 &&
                  adultchildItem({
                    ...adultchild,
                    adult: adultchild.adult - 1,
                  })
                }
                className={`text-4xl ${
                  adultchild.adult === 1
                    ? "cursor-not-allowed text-[#D0D0D0]"
                    : "cursor-pointer "
                }`}
                disabled={adultchild.adult === 1}
              >
                -
              </button>
              <p>{adultchild.adult}</p>
              <button
                onClick={() =>
                  adultchildItem({
                    ...adultchild,
                    adult: adultchild.adult + 1,
                  })
                }
                className="text-baseTextColor"
              >
                +
              </button>
            </div>
          </div>
          {/* Child */}
          <div className="flex items-center justify-between">
            <p>Child</p>
            <div className="border flex items-center space-x-8 px-4 py-2 rounded text-xl">
              <button
                onClick={() =>
                  adultchild.child > 0 &&
                  adultchildItem({
                    ...adultchild,
                    child: adultchild.child - 1,
                  })
                }
                className={`text-4xl ${
                  adultchild.child === 0
                    ? "cursor-not-allowed text-[#D0D0D0]"
                    : "cursor-pointer "
                }`}
                disabled={adultchild.child === 0}
              >
                -
              </button>
              <p>{adultchild.child}</p>
              <button
                onClick={() =>
                  adultchildItem({
                    ...adultchild,
                    child: adultchild.child + 1,
                  })
                }
                className="text-baseTextColor"
              >
                +
              </button>
            </div>
          </div>
          {adultchild.child > 0 && (
            <div>
              <select
                value={adultchild.selectedAge}
                onChange={(e) =>
                  adultchildItem({
                    ...adultchild,
                    selectedAge: parseInt(e.target.value),
                  })
                }
                className="my-2 border px-2 py-1 rounded"
              >
                {ages.map((age) => (
                  <option key={age} value={age}>
                    {age} Years
                  </option>
                ))}
              </select>
              <p className="text-sm">
                To find you a place to stay that fits your entire group along
                with correct prices, we need to know how old your child will be
                at check-out
              </p>
            </div>
          )}
          {/* Rooms */}
          {/* <div className="flex items-center justify-between">
            <p>Rooms</p>
            <div className="border flex items-center space-x-8 px-4 py-2 rounded text-xl">
              <button
                onClick={() =>
                  setPersonSelected({
                    ...personSelected,
                    rooms: personSelected.rooms - 1,
                  })
                }
                className={`text-4xl ${
                  personSelected.rooms === 1
                    ? "cursor-not-allowed text-[#D0D0D0]"
                    : "cursor-pointer "
                }`}
                disabled={personSelected.rooms === 1}
              >
                -
              </button>
              <p>{personSelected.rooms}</p>
              <button
                onClick={() =>
                  setPersonSelected({
                    ...personSelected,
                    rooms: personSelected.rooms + 1,
                  })
                }
                className="text-baseTextColor"
              >
                +
              </button>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
