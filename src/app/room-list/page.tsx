"use client";
import { useGetData } from "@/lib/serverApiCall";
import SearchBar from "../pages/Header/SearchBar";
import Service from "../pages/Header/Service";
import HotelFilterSection from "./HotelFilterSection";
import HotelList from "./HotelList";
import { useContext, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ContextApiProviders } from "@/providers/ContextProviders";

const RoomList = () => {
  const [totalPages, setTotalPages] = useState(0);
  const {
    filterItem,
    setfilterItem,
    adultchild,
    adultchildItem,
    queryParams,
  }: any = useContext(ContextApiProviders);

  let api = "/reservation-client/room";
  const fullApi = `${api}${queryParams ? `?${queryParams}` : ""}`;
  const [data, refetch, isLoading] = useGetData({
    api: fullApi,
  });

  useEffect(() => {
    if (data?.total) {
      setTotalPages(Math.ceil(data.total / filterItem.limit));
    }
  }, [data, filterItem]);

  // refetch();
  useEffect(() => {
    refetch();
  }, [filterItem, refetch]);
  console.log("queryParams", queryParams);
  console.log("fullApi", fullApi);
  console.log("datalist", data?.data);
  console.log("datalist", data?.data.length);

  const handlePaginationChange = (_event: any, value: any) => {
    setfilterItem((prevFilterItem: any) => ({
      ...prevFilterItem,
      skip: (value || 1 - 1) * (filterItem.limit || 10) - 10,
      // skip: value || 1,
      // skip: ((value || 1) - 1) * (pagination.pageSize || 10),
    }));
  };

  return (
    <div className="text-black">
      <div className="bg-baseBgColor">
        <div className=" max-w-screen-2xl mx-auto">
          {/* <div className="lg:absolute top-[11rem]">
            <SearchBar />
          </div> */}
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto lg:grid lg:grid-cols-4 gap-5 ">
        <div className="col-span-1">
          {/* <HotelFilterSection /> */}
          <div className="border py-5 px-8 space-y-5">
            {/* <GoogleFilter /> */}
            <h1 className="font-semibold text-2xl">Select Filters</h1>
            <div className=" flex justify-center">
              <input
                onChange={(e) =>
                  setfilterItem((prevFilterItem: any) => ({
                    ...prevFilterItem,
                    key: e.target.value,
                  }))
                }
                type="text"
                placeholder="Search your Room"
                className="border px-4 py-2 w-full"
              />
            </div>
            <hr />
            <div className="space-y-8">
              <div>
                <p className="font-semibold">Occupancy</p>
                <div className="my-3  space-y-2">
                  <div className="flex items-center justify-between">
                    <p>Adults</p>
                    <div className="border flex items-center space-x-8 px-2 py-1 rounded text-xl">
                      <button
                        onClick={() =>
                          adultchild.adult > 0 &&
                          adultchildItem({
                            ...adultchild,
                            adult: adultchild.adult - 1,
                          })
                        }
                        className={`text-4xl ${
                          adultchild.adult === 0
                            ? "cursor-not-allowed text-[#D0D0D0]"
                            : "cursor-pointer "
                        }`}
                        disabled={adultchild.adult === 0}
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

                  <div className="flex items-center justify-between">
                    <p>Child</p>
                    <div className="border flex items-center space-x-8 px-2 py-1 rounded text-xl">
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
                </div>
              </div>
              <hr />

              <div>
                <p className="font-semibold">Optional</p>
                <div className="my-3  space-y-2">
                  <div>
                    <input
                      type="checkbox"
                      id="availability"
                      onChange={(e) =>
                        setfilterItem((prevFilterItem: any) => ({
                          ...prevFilterItem,
                          availability: e.target.checked ? 1 : "",
                        }))
                      }
                    />
                    <label htmlFor="availability" className="ms-3">
                      Available
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="refundable"
                      // defaultChecked={filterItem.refundable === 1}
                      onChange={(e) =>
                        setfilterItem((prevFilterItem: any) => ({
                          ...prevFilterItem,
                          refundable: e.target.checked ? 1 : "",
                        }))
                      }
                    />
                    <label htmlFor="refundable" className="ms-3">
                      Refundable
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex mx-auto space-x-5">
            <svg
              className="animate-spin h-5 w-5 mr-3 bg-baseBgColor"
              viewBox="0 0 24 24"
            />
            <svg
              className="animate-spin h-5 w-5 mr-3 bg-baseBgColor"
              viewBox="0 0 24 24"
            />
            <svg
              className="animate-spin h-5 w-5 mr-3 bg-baseBgColor"
              viewBox="0 0 24 24"
            />
          </div>
        ) : (
          <div className="col-span-3 space-y-4">
            {/* {Array.isArray(data?.data) ? ( */}
            {Array.isArray(data?.data) && data?.data.length > 0 ? (
              <>
                {data?.data?.map((roomList: any, index: number) => (
                  <div key={roomList?.id}>
                    {/* {index + 1 + filterItem?.skip} */}
                    <HotelList
                      key={roomList?.id}
                      roomList={roomList}
                      refetch={refetch}
                    />
                  </div>
                ))}
                <div className="flex justify-end pb-5">
                  <Stack spacing={2}>
                    <Pagination
                      count={totalPages}
                      onChange={handlePaginationChange}
                      sx={{
                        "& .MuiPaginationItem-root.Mui-selected": {
                          backgroundColor: "#8f6456", // Custom color for selected page
                          color: "white", // Custom text color for selected page
                        },
                        "& .MuiPaginationItem-root": {
                          color: "#8f6456", // Custom text color for other pages
                        },
                      }}
                      size="large"
                    />
                  </Stack>
                </div>
              </>
            ) : (
              <div
                className="flex justify-center font-semibold
              "
              >
                <p>No Room List available</p>
              </div>
            )}
          </div>
        )}
      </div>
      {/* <CommonPagination
        handlePaginationChange={handlePaginationChange}
        totalPages={totalPages}
        setfilterItem={setfilterItem}
      /> */}
    </div>
  );
};

export default RoomList;
