import Image from "next/image";
import payment from "../../../../public/assests/payment.jpg";

const ConfirmationInfo = () => {
  return (
    <div className="px-5 py-8 lg:py-2">
      <div>
        <div className="lg:flex items-center lg:space-x-5">
          <Image src={payment} alt="payment" className="rounded lg:w-[15rem]" />
          <div className="my-5 lg:my-0 space-y-1">
            <p className="font-semibold">VIP Hotel , Dhaka</p>
            <p>1 Minto Road GPO Box 504, Dhaka, Bangladesh</p>
            <p>
              Reservation : <span className="underline"> 1-888-424-6835</span>{" "}
            </p>
            <p>
              Front Desk : <span className="underline">880-2-55663030</span>{" "}
            </p>
            <p>Check in 3 pm / Check out 12 pm</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="space-y-3 font-semibold">
            <h1>Dates</h1>
          </div>
          <div className="space-y-3 w-[10rem] text-right ">
            <h1>Feb 15-16, 2024 Check in 3 pm</h1>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between ">
          <div className="space-y-3 font-semibold">
            <h1>Reservation</h1>
          </div>
          <div className="space-y-3">
            <h1>1 room, 1 adult</h1>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between ">
          <div className="space-y-3 font-semibold">
            <h1>Room type</h1>
          </div>
          <div className="space-y-3 w-[10rem] text-right ">
            <h1>2 Single Classic</h1>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between ">
          <div className="space-y-3 font-semibold">
            <h1>Rate</h1>
          </div>
          <div className="space-y-3 w-[18rem] text-right ">
            <h1>Best Flexible Member Exclusive Rate with Breakfast</h1>
          </div>
        </div>

        <hr className="my-4 border-2 border-black" />
        <div className="flex justify-between ">
          <div className="space-y-3 font-semibold">
            <h1>Total price</h1>
          </div>
          <div className="space-y-3 w-[18rem] text-right font-semibold">
            <h1>20,236.80 BDT</h1>
          </div>
        </div>

        <div className="flex justify-between mt-8 mb-4">
          <div className="space-y-3 font-semibold">
            <h1>Total price in hotel currency </h1>
          </div>
          <div className="space-y-3 ] text-right font-semibold">
            <h1>184.39 USD</h1>
          </div>
        </div>
        <p>
          Final payment will be in the hotels currency. Learn more about about
          currency exchange data.
        </p>
      </div>
      <div className="my-10">
        <p className="text-xl font-semibold">Please Note</p>
        <div className="space-y-3 mt-3">
          <p>
            As exchange rates may fluctuate from the time a reservation is made
            until the actual stay, the confirmed rate is guaranteed in the
            hotels base currency.
          </p>
          <p>
            ‡ As taxes and additional charges may fluctuate from the time a
            reservation is made until the actual stay and during the actual
            stay, the Total Price is an estimate. Estimated price includes Room
            rate, Extra person charges, additional charges, Total tax and Total
            hotel charges. Additional charges are hotel-specific. Other
            hotel-specific charges may also apply. Check with hotel for details.
          </p>
          <p>
            Only the reservation as entered into and confirmed by our system
            will be honored. Any written or printed confirmation that has been
            altered may be rejected by the hotel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationInfo;
