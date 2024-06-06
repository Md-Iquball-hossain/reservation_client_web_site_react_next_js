"use client";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import { useGetSelectedRoomList } from "@/lib/serverApiCall";
import { IMG_URl } from "@/lib/request";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import SingleBookedRoomDetails from "./SingleBookedRoomDetails";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 620,
  height: 900,
  bgcolor: "background.paper",
  // border: "0px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "hidden",
};

const MyHotel = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [filterItem, setfilterItem] = useState<{
    skip: number;
    limit: number;
  }>({
    skip: 0,
    limit: 10,
  });

  const queryParams = Object.entries(filterItem)
    .filter(([key, value]: any) => {
      return value === filterItem.limit || value === filterItem.skip;
    })
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  let api = "/reservation-client/room-booking";
  const fullApi = `${api}${queryParams ? `?${queryParams}` : ""}`;
  const [data, refetch, isLoading] = useGetSelectedRoomList({
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

  const handlePaginationChange = (_event: any, value: any) => {
    setfilterItem((prevFilterItem: any) => ({
      ...prevFilterItem,
      skip: (value || 1 - 1) * (filterItem.limit || 10) - 10,
    }));
  };

  console.log("myRoom", data?.data);
  const [selectedId, setSelectedId] = useState(Number);
  const [open, setOpen] = useState(false);
  console.log("seleeeee", selectedId);

  const handleOpen = (id: any) => {
    setSelectedId(id as any);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className="text-4xl lg:text-6xl font-semibold">My Room</h1>
      <hr className="my-4" />

      {Array.isArray(data?.data) &&
        data?.data?.map((item: any) => (
          <div
            key={item.id}
            className="flex justify-between items-center border px-5 py-5 my-5"
            // onClick={handleOpen}
            // onClick={() => handleOpen(item.id)}
          >
            {/* {item.id} */}
            <div className="flex items-center space-x-5">
              <Image
                src={`${IMG_URl}${item?.booking_rooms?.[0]?.images?.[0]}`}
                alt="img"
                width={250}
                height={200}
              />
              <div className="space-y-2">
                <h1 className="text-xl font-semibold">
                  {item?.booking_rooms?.[0]?.room_type}
                </h1>
                <div className="flex items-center space-x-5">
                  <p className="border px-2 py-1 rounded">
                    <FontAwesomeIcon icon={faPerson} className="w-4 me-3" />
                    {item?.total_occupancy}
                  </p>
                  <p className="border px-2 py-1 rounded">
                    <FontAwesomeIcon icon={faBed} className="w-4 me-3" />
                    {item?.booking_rooms?.[0]?.bed_type}
                  </p>
                </div>
                <p className="text-baseTextColor">{item?.location}</p>
                <p className="text-sm">Booking Number : {item?.booking_no}</p>
                <p className="text-sm">
                  Night Stays : {item?.number_of_nights}
                </p>
                <p className="text-sm">
                  Extra Charge : {item?.extra_charge} BDT
                </p>
                <p className="text-sm">Grand Total : {item?.grand_total} BDT</p>
              </div>
            </div>
            <div>
              <p className="text-2xl">
                {item?.price}{" "}
                <span className="text-base">{item?.priceType}</span>
              </p>
              <div className="flex mt-5 ">
                <div className="py-2 px-5 border rounded text-white bg-green-400">
                  {item?.booking_rooms?.[0]?.availability === 1 && "Confirmed"}
                </div>

                {/* <Link
                  href={`/room-list/${item?.id}`}
                  className="py-2 px-5 border rounded border-baseBgColor"
                >
                  Details
                </Link> */}
                <button
                  type="button"
                  className="py-2 px-5 border rounded border-baseBgColor"
                  onClick={() => handleOpen(item)}
                >
                  Details
                </button>
              </div>
            </div>
            {/* <Modal
              open={open && selectedId === item.id}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <span onClick={handleClose}>close</span>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Room ID: {selectedId}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  
                </Typography>
              </Box>
            </Modal> */}
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SingleBookedRoomDetails selectedId={selectedId} />
        </Box>
      </Modal>
    </div>
  );
};

export default MyHotel;
