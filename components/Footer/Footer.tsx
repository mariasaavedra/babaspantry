import React from "react";
import Text from "../Text/Text";

function Footer() {
  return (
    <footer className="footer">
      <div
        className="relative inline h-screen w-1/2"
        style={{
          backgroundImage: `url("/images/BP_6.webp")`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="relative flex  py-2 items-center  h-screen w-1/2 p-8 bg-purple">
        <Text>
          <h1 className="font-arabic text-6xl">اتصل بنا</h1>
          <h1 className="font-header py-2 text-9xl">Contact Us</h1>

          <h1 className="font-header text-3xl">Location</h1>
          <p> 1019 E 63rd St, Kansas City, MO 64110</p>

          <h1 className="font-header text-3xl">Hours</h1>
          <p> Monday - Saturday 11AM–7:00PM</p>
          <p>Sunday Closed</p>

          <h1 className="font-header text-3xl">Phone</h1>
          <p>(816) 702-0045</p>

          <h1 className="mt-10 text-3xl font-header">
            We accept catering orders via our email please give us no less than
            48 hours notice in advance.
          </h1>
        </Text>
      </div>
    </footer>
  );
}

export default Footer;