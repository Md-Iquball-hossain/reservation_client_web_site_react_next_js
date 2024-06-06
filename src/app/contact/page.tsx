import CommonPageHeaderTitle from "@/components/commonTitle/commonPageHeaderTitle";

const Contact = () => {
  return (
    <div>
      <CommonPageHeaderTitle title="Contact Us" />
      <div>
        <section className="text-gray-600 body-font relative text-black">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                GET IN TOUCH
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Message us for any queries and wait for our quick response .
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Your Name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-baseBgColor focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-baseBgColor focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter Your Message"
                      className="pt- w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-baseBgColor focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-baseBgColor border-0 py-2 px-8 focus:outline-none  rounded text-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
