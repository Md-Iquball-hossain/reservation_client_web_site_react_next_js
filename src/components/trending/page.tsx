import Image from "next/image";
import cox from "../../../public/assests/cox.jpg";
import manjil from "../../../public/assests/manjil.jpg";
import sylhet from "../../../public/assests/sylhet.jpg";
import saint from "../../../public/assests/sainmartin.jpg";
import bd from "../../../public/assests/bd.png";
import CommonTitle from "../commonTitle/Page";

const TrendingDestinations = [
  {
    id: 1,
    title: "Cox's Bazar",
    img: cox,
  },
  {
    id: 2,
    title: "Dhaka",
    img: manjil,
  },
  {
    id: 3,
    title: "Sylhet",
    img: sylhet,
  },
  {
    id: 4,
    title: "Saint Martin",
    img: saint,
  },
  //   {
  //     id: 5,
  //     title: "e",
  //     img: "../../../public/assests/cox.jpg",
  //   },
];

const Trending = () => {
  return (
    <div className="my-20">
      <div className="lg:max-w-screen-2xl mx-auto ">
        <div>
          <CommonTitle
            title="Trending destinations"
            description="Travellers searching for Bangladesh also booked these"
          />
        </div>
        {/* <div className="my-5 space-y-5">
          <div className="lg:grid lg:grid-cols-2 gap-10 ">
            <div>
              <div className="hover:text-white">
                <Image
                  src={cox}
                  alt="Coxs"
                  className="rounded w-[80rem] h-[20rem] hover:brightness-50 duration-300 hover:duration-300 hover:drop-shadow-2xl"
                />
                <div className="absolute top-[52rem] lg:top-[40rem] flex">
                  <p className="text-3xl px-5">Cox's Bazar</p>
                  <Image src={bd} alt="flag" />
                </div>
              </div>
            </div>
            <div>2</div>
          </div>
          <div>2</div>
        </div> */}
        <div className="lg:grid lg:grid-cols-2 gap-8 my-5 ">
          {TrendingDestinations?.map((item) => (
            <div key={item?.id}>
              {item?.id === 1 || item?.id === 2 ? (
                <div className="col-span-1 relative">
                  <div className="space-y-5 hover:text-white">
                    <Image
                      src={item.img}
                      alt="Coxs"
                      width={600}
                      height={200}
                      className="rounded w-[80rem] h-[20rem] hover:brightness-50 duration-300 hover:duration-300 hover:drop-shadow-2xl"
                    />
                    <div className="absolute top-5 lg:top-5 flex">
                      <p className="text-3xl px-5 font-bold">{item?.title}</p>
                      <Image src={bd} alt="flag" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-span-1 relative">
                  <div className="space-y-5 hover:text-white">
                    <Image
                      src={item.img}
                      alt="Coxs"
                      width={600}
                      height={200}
                      className="rounded w-[80rem] h-[20rem] hover:brightness-50 duration-300 hover:duration-300 hover:drop-shadow-2xl"
                    />
                    <div className="absolute top-5 lg:top-5 flex">
                      <p className="text-3xl px-5 font-bold">{item?.title}</p>
                      <Image src={bd} alt="flag" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
