"use client";
import Image from "next/image";
import React, { useState } from "react";
import bd from "../../../public/assests/bd-flag.png";
import en from "../../../public/assests/usa-flag.png";

const LanguageTranslate = () => {
  const [langu, setLangu] = useState(false);
  return (
    <div>
      {langu ? (
        <button
          className="pointer d-flex align-items-center me-8 flex items-center "
          onClick={() => {
            setLangu(!langu);
          }}
        >
          <Image
            src={bd}
            alt="bd-flag"
            width={30}
            height={20}
            objectFit="cover"
          />
          <span className="languageText ms-1">বাংলা</span>
        </button>
      ) : (
        <button
          className="pointer d-flex align-items-center me-8 flex items-center "
          onClick={() => {
            setLangu(!langu);
          }}
        >
          <Image
            src={en}
            alt="usa-flag"
            width={30}
            height={20}
            objectFit="cover"
          />
          <span className="languageText ms-1">English</span>
        </button>
      )}
    </div>
  );
};

export default LanguageTranslate;
