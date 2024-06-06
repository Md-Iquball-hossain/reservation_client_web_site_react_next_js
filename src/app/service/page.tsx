import CommonPageHeaderTitle from "@/components/commonTitle/commonPageHeaderTitle";

const Services = () => {
  const services: any = [
    {
      id: 1,
      name: "Car rental services",
    },
    {
      id: 2,
      name: "Catering services",
    },
    {
      id: 3,
      name: "Concierge services",
    },
    {
      id: 4,
      name: "Courier services",
    },
    {
      id: 5,
      name: "Doctor on call ",
    },
    {
      id: 6,
      name: "Dry cleaning",
    },
    {
      id: 7,
      name: "Excursions and guided tours ",
    },
    {
      id: 8,
      name: "Flower arrangement ",
    },
    {
      id: 9,
      name: "Ironing service",
    },
    {
      id: 10,
      name: "Laundry and valet service ",
    },
    {
      id: 10,
      name: "Mail services      ",
    },
    {
      id: 11,
      name: "Room service (24-hour)",
    },
  ];

  return (
    <div>
      <CommonPageHeaderTitle title="Services" />
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-center py-20 text-4xl ">
          We are always ready to give you our best service
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-6 place-items-center justify-between px-5 lg:px-0">
          {services?.map((item: any) => (
            <div
              key={item?.id}
              className="border text-xl px-5 py-5 rounded-lg  text-baseTextColor border-baseBgColor mb-8 hover:bg-baseBgColor hover:text-white duration-300 hover:duration-300"
            >
              <p>{item?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
