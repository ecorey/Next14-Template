import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="flex items-center justify-between max-w-screen-2xl h-full mx-auto px-4 ">
        
        {/* Left Container currently Empty */}
        <div className="flex-1 flex justify-center lg:justify-start"></div>

        {/* Centered Container w Text */}
        <h1 className="text-4xl uppercase font-bold pixelify_sans">Hello</h1>
        
        {/* Right Container w Wallet*/}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="hidden lg:inline-flex gap-8 items-center">
            <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
              Connect Wallet
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
