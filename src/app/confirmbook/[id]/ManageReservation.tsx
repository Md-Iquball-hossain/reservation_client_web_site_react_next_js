const ManageReservation = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Manage your reservation</h1>

      <div className="w-full my-10 space-y-5">
        <button className="border w-full py-3 bg-baseBgColor text-white rounded">
          Modify or Cancel
        </button>
        <button className="border w-full py-3 border-baseBgColor text-baseTextColor rounded">
          Duplicate Reservation
        </button>
      </div>
    </div>
  );
};

export default ManageReservation;
