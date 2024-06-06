import Link from "next/link";
import HotelBasicInformation from "./HotelBasicInformation";

const HotelList = ({ roomList, refetch }: any) => {
  // console.log("dataofroom", roomList);
  refetch();
  const {
    id,
    adult,
    availability,
    bed_type,
    child,
    discount,
    discount_night,
    refundable,
    room_amenities,
    room_images,
    room_type,
    rate_per_night,
    discount_percent,
  } = roomList;
  return (
    <div className="border hover:border-baseTextColor duration-300 hover:duration-300">
      <Link
        href={`/room-list/${id}?room-type=${room_type}`}
        className=" lg:grid lg:grid-cols-3 "
      >
        <div className="col-span-2 px-3 py-4 ">
          <HotelBasicInformation
            basicInfo={{
              room_images,
              room_type,
              bed_type,
              child,
              adult,
              room_amenities,
            }}
          />
        </div>
        <div className="col-span-1 lg:border-l-2  lg:text-right flex flex-col px-5 py-4 space-y-10">
          <div>
            <h1 className="text-baseTextColor font-semibold text-xl ">
              Very Good
              <span className="border px-2 py-1 rounded font-semibold bg-baseBgColor text-white ms-3">
                4.0
              </span>
            </h1>
            <p className="text-sm mt-1">( 500 ratings)</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">BDT {rate_per_night}</h1>
            {discount_percent && <p> {discount_percent} % Discount + BDT</p>}
            <p>
              Per Night{" "}
              {refundable === 1 ? (
                <p className="text-sm text-baseTextColor"> Refundable</p>
              ) : (
                <p className="text-sm text-baseTextColor">Non-Refundable</p>
              )}{" "}
            </p>
          </div>
          {availability === 0 ? (
            <p className="text-sm text-baseTextColor">BOOKED</p>
          ) : (
            <div className="text-sm text-green-600">Available</div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default HotelList;
