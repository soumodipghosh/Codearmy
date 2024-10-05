import React from "react";
import frontpage from "../assets/image/frontpage.jpg";
import { ImLinkedin } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTerminalDash } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="">
      <div className="justify-center">
        <div className="justify-center flex gap-32">
          <div className="ml-24 mt-32">
            <h1 className="text-[60px] font-bold">
              <span className="text-[#002057]">Be a part of our</span>
              <br />
              <span className="text-[#FF8A00]">Army !</span>
            </h1>
            <h2 className="text-[29px] mt-5 text-gray-600">
              A community of coders, making world a <br /> better place.
            </h2>
            <div className="flex gap-4 mt-8">
              <a href="">
                <ImLinkedin className="rounded-full text-[40px]" />
              </a>
              <a href="">
                <FaYoutube className="rounded-full text-[40px]" />
              </a>
              <a href="">
                <FaInstagram className="rounded-full text-[40px]" />
              </a>
            </div>
            <div className="mt-10 flex gap-6">
              <button className="rounded-md bg-[#FF8A00] w-[150px] h-[50px] text-black tracking-widest font-semibold">
                Enroll Now
              </button>
              <button className="rounded-md bg-slate-100 w-[200px] h-[50px] tracking-widest font-semibold border hover:border-yellow-400">
                Watch Video
              </button>
            </div>
          </div>
          <div className="mt-32">
            <img src={frontpage} alt="" width={600} className="mt-10" />
          </div>
        </div>

        <div className="text-center mt-20 bg-gradient-to-r from-white via-orange-200 to-orange-400">
          <div className="">
            <h1 className="text-[50px] font-bold py-8">Articles</h1>
            <h3 className="font-extrabold text-[20px] text-gray-600">
              DO YOU KNOW TEXT BEATS VIDEOS IN TERMS OF lLEARNING SPEED.
            </h3>
          </div>
          <div className="flex justify-center items-center mt-20 gap-28">
            <div className="border-x-2 border-y-8 bg-white h-96 w-96 rounded-xl shadow-md hover:scale-105 duration-500">
              <h1 className="mt-10 font-bold text-[20px]">Data Structure</h1>
              <p className="mt-5 text-gray-600 font-semibold">
                DSA (Data Structure and Algorithms) <br /> are esential concepts
                in computer <br /> science, focused on efficient data <br />{" "}
                organization and problem-solving <br /> techniques. They provide
                tools to <br />
                store, retrive, and process data, <br /> influencing the
                efficiency of softwere <br /> applications. Mastering DSA <br />{" "}
                enhances the skill and optimize <br /> algorithmic solutions.
              </p>
            </div>
            <div className="border-x-2 border-y-8 bg-white h-96 w-96 rounded-xl shadow-md hover:scale-105 duration-500">
              <h1 className="mt-10 font-bold text-[20px]">C++</h1>
              <p className="mt-5 text-gray-600 font-semibold">
                DSA (Data Structure and Algorithms) <br /> are esential concepts
                in computer <br /> science, focused on efficient data <br />{" "}
                organization and problem-solving <br /> techniques. They provide
                tools to <br />
                store, retrive, and process data, <br /> influencing the
                efficiency of softwere <br /> applications. Mastering DSA <br />{" "}
                enhances the skill and optimize <br /> algorithmic solutions.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Hero;

{
  /*  */
}
