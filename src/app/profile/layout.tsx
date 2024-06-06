import Sidebar from "./Sidebar";

const layout = ({ children }: any) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-4 gap-10 my-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3 ">{children}</div>
      </div>
    </div>
  );
};

export default layout;
