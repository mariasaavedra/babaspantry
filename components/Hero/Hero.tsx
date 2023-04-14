import React from "react";
import Text from "../Text/Text";

function Hero() {
  return (
    <div className="w-screen h-screen bg-purple pt-10 flex flex-nowrap border-2 border-violet">
      <div
        className="relative inline h-auto w-screen"
        style={{
          backgroundImage: `url("/images/BP_7.webp")`,
          backgroundSize: "cover",
          backgroundPosition: 'top'
        }}
      >
        {/* <img className="inline  w-1/3 h-min-screen" src="/images/BP_1.jpeg"></img> */}
      </div>
    </div>
  );
}

export default Hero;
