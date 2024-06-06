import React from "react";

const CommonPageHeaderTitle = ({ title }: any) => {
  return (
    <div>
      <div className="bg-contact-img h-[250px] flex justify-center items-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white grid place-items-center space-y-12 uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CommonPageHeaderTitle;
