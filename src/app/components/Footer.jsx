import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Image
              src="/images/logo.png"
              alt="logo image"
              // className="top-1/9 left-1/9"
              width={38}
              height={10}
            />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
