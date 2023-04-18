import React from "react";
import Text from "../Text/Text";
import styles from "./Hero.module.css";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

function Hero() {
  return (
    <div className="w-screen h-screen bg-purple pt-10 flex flex-nowrap border-2 border-violet">
      <div
        className="relative inline h-auto w-screen"
        style={{
          backgroundImage: `url("/images/BP_7.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute  bottom-20 left-10 w-[450px] h-[350px]">
          <h1
            className={
              styles.text +
              " font-header text-8xl underline text-[#fff] p-8 rounded-sm text-left"
            }
          >
            Top 10 Best Restaurants <br /> by Bon Appétit
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
