import { faEnvelope, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationInfo from "./ConfirmationInfo";
import ManageReservation from "./ManageReservation";

const ConfirmBook = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-2 lg:px-0 text-black">
      <h1 className="text-4xl lg:text-6xl font-semibold">
        Your upcoming stay in Dhaka
      </h1>
      <div className="my-4 flex justify-between items-center">
        <p>Confirmation number: 40789192</p>
        <div className="flex items-center space-x-5 font-semibold">
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="px-2" />
            <span className="underline">Email</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faPrint} className="px-2" />
            <span className="underline">Print</span>
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-5 my-10">
        <div className="col-span-2">
          <ConfirmationInfo />
        </div>
        <div className="col-span-1">
          <ManageReservation />{" "}
        </div>
      </div>
    </div>
  );
};

export default ConfirmBook;
