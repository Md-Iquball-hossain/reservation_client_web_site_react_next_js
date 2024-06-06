import SearchBar from "./SearchBar";
import CommonTypeWriter from "@/components/CommonTypeWriter/page";

const Header = () => {
  return (
    <div className="bg-img h-[500px] lg:h-[700px] flex justify-center items-center text-white ">
      <div className="lg:max-w-screen-2xl mx-auto ">
        <div className="grid place-items-center space-y-12">
          <div className="lg:text-6xl flex items-center space-x-3">
            <p>Enjoy The </p> <CommonTypeWriter />
          </div>
          <p className=" text-xl">
            Everything you can dream about, available here , just got 50% per
            night{" "}
          </p>
          <SearchBar />{" "}
          {/* <div className="lg:absolute">
            <SearchBar />{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
