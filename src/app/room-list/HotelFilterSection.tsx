import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import GoogleFilter from "./GoogleFilter";
import { faMagnifyingGlass, faSearch } from "@fortawesome/free-solid-svg-icons";

const HotelFilterSection = () => {
  return (
    <div className="border py-5 px-8 space-y-5">
      {/* <GoogleFilter /> */}
      <h1 className="font-semibold text-2xl">Select Filters</h1>

      <div className="space-y-8">
        {/* star Category */}
        {/* <div>
          <p className="font-semibold">Occupancy Category</p>
          <div className="my-3 border ">
            <div className="space-y-2">
              <div className="flex items-center justify-between border w-[10rem]">
                <label htmlFor="myCheckbox" className="ms-3">
                  Child
                </label>
                <input type="number" id="myCheckbox" className="border w-[2rem]"/>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Adult
                </label>
              </div>
            </div>
         
          </div>
        </div> */}
        <hr />
        {/* star Category */}
        <div>
          <p className="font-semibold">Star Category</p>
          <div className="flex items-center justify-between my-3">
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  4 Star
                </label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  5 Star
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <h1>(4)</h1>
              <h1>(5)</h1>
            </div>
          </div>
        </div>
        <hr />
        {/* Luxury Brands  */}
        <div>
          <p className="font-semibold">Luxury Brands</p>
          <div className="flex items-center justify-between my-3">
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Wind Flower
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <h1>(2)</h1>
            </div>
          </div>
        </div>
        <hr />
        {/* User Rating */}
        <div>
          <p className="font-semibold">User Rating</p>
          <div className="flex items-center justify-between my-3">
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Excellent : 4.2+
                </label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Very Good : 3.5+
                </label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Good : 3+
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <h1>(0)</h1>
              <h1>(4)</h1>
              <h1>(2)</h1>
            </div>
          </div>
        </div>
        <hr />
        {/* Property Type */}
        <div>
          <p className="font-semibold">Property Type</p>
          <div className="flex items-center justify-between my-3">
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Resort
                </label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Banglow
                </label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Hotel
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <h1>(4)</h1>
              <h1>(9)</h1>
              <h1>(29)</h1>
            </div>
          </div>
        </div>
        <hr />
        {/* Amenities  */}
        <div>
          <p className="font-semibold">Amenities</p>
          <div className="relative my-3">
            <input
              placeholder="Search your Amenities"
              className="border w-full px-5 py-1 rounded pl-10"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          <div className="flex items-center justify-between my-3">
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Swimming Pool
                </label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Spa
                </label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox" className="ms-3">
                  Wi-fi
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <h1>(2)</h1>
              <h1>(6)</h1>
              <h1>(9)</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFilterSection;
