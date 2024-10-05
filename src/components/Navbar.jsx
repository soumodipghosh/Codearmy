import React from "react";
import logo from "../assets/image/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full">
      <header className="flex bg-[#F7F8FC] border shadow-md h-[80px] justify-center gap-40 px-10 w-full">
        <img src={logo} alt="" height={100} width={200} />
        <div className="flex gap-20 mt-7 font-semibold text-lg">
          <a href="" className="text-[#FF8A00] hover:underline">
            Home
          </a>
          <a href="" className="hover:text-[#FF8A00] hover:underline">
            About
          </a>
          <a href="" className="hover:text-[#FF8A00] hover:underline">
            Tutorials
          </a>
          <a href="" className="hover:text-[#FF8A00] hover:underline">
            Contact
          </a>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="rounded-xl bg-[#FF8A00] lg:w-[110px] lg:h-[50px] text-white">
            Login
          </button>
          <button className="rounded-xl bg-[#0C24FF] lg:w-[110px] lg:h-[50px] text-white">
            Dashboard
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
