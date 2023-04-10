import React from "react";
import Text from "../Text/Text";

function Footer() {
  return (
    <footer className="footer">
      <div className="h-screen w-screen text-center pt-20 bg-purple">
        <Text>
          <h1 className="font-header mt-20 text-7xl">Contact Us</h1>

          <h1 className="font-header text-3xl">Location</h1>
          <p> 1019 E 63rd St, Kansas City, MO 64110</p>

          <h1 className="font-header text-3xl">Hours</h1>
          <p> Monday - Saturday 11AM–7:00PM</p>
          <p>Sunday Closed</p>

          <h1 className="font-header text-3xl">Phone</h1>
          <p>(816) 702-0045</p>
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
