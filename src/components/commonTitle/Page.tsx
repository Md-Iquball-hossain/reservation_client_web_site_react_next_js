import React from "react";

const CommonTitle = ({ title, description }: any) => {
  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CommonTitle;
