"use client";
import Typewriter from "typewriter-effect";

const CommonTypeWriter = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Time", "Experience", "Stays..!"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default CommonTypeWriter;
