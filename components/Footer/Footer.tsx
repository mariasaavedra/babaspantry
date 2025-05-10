import React from "react";
import Text from "../Text/Text";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div
        className="hidden md:block relative inline h-screen w-1/2 border-2 border-violet"
        style={{
          backgroundImage: `url("/images/BP_6.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></div>
      <div className="relative  flex  py-2 items-center  h-screen md:w-1/2 md:p-8 bg-purple">
        <Text>
          <img width={150} src="/images/contact-arabic.svg"></img>
          <h1 className="font-header py-2 text-5xl md:text-7xl">Contact Us</h1>
          <h1 className="font-header text-2xl  md:text-3xl">Location</h1>
          <p className="text-sm md:text-base">
            {" "}
            1019 E 63rd St, Kansas City, MO 64110
          </p>

          <h1 className="font-header text-2xl  md:text-3xl">Hours</h1>
          <p className="text-sm md:text-base"> Monday - Saturday 11AM–7:00PM</p>
          <p className="text-sm md:text-base">Sunday Closed</p>

          <h1 className="font-header text-2xl  md:text-3xl">Phone</h1>
          <p className="text-sm md:text-base">(816) 702-0045</p>

          <h1 className="font-header text-2xl  md:text-3xl">Email</h1>
          <p className="text-sm md:text-base">babaspantrykcmo@gmail.com</p>

          <h1 className="mt-4 md:mb-10 text-xs md:text-3xl md:font-header">
            We accept catering orders via our email please give us no less than
            48 hours notice in advance. Please list the amount of people and
            dishes you are interested in and we will reply with pricing and
            amount needed for your party.
          </h1>
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
