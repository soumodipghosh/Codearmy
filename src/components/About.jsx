import React from 'react'
import rohit from "../assets/image/rohit_negi.png"

const About = () => {
  return (
    <div className=''>
      <div className='justify-center items-center'>
        <div className='flex items-center justify-center gap-96'>
            <h1 className='text-[45px] font-bold'>Learn from the <span className='text-[#FF8A00]'>Best !</span></h1>
            <button className='ml-28 items-right rounded-lg bg-[#FF8A00] w-[200px] h-[50px] text-white text-xl font-bold'>Know More</button>
        </div>
        <hr className='mt-5 border-black ml-24 mr-24' />
        <br /><br /><br />

        <div className='flex justify-evenly'>
            <div className=''>
                <img src={rohit} alt="" width={300} className='border rounded-full' />
                <h1 className='ml-20 font-bold text-[30px]'>Rohit Negi <br /> <span className='-ml-16 text-gray-500'>Founder, CoderArmy</span></h1>
            </div>
            <div className=''>
                <h3 className='font-extrabold text-sm text-[#FF8A00]'>ABOUT ME</h3>
                <h1 className='mt-2 font-bold text-[#000000] text-3xl'>Heartfelt Problem Solver,<br /> Instructor, and Visionary Leader,<br /> Striving to Make a Difference.</h1>
                <h3 className='mt-2 text-gray-500 font-bold'>Working hard to make Technology better and more Impactful for <br /> the society.</h3>

                <div className='border rounded-xl bg-[#E6F9FF] w-[370px] h-[100px] mt-4'>
                  <h1 className='px-5 py-5 text-[#003366] text-xl font-bold'>Got Highest Placement in India of <br /> 2 Cr + </h1>
                </div>
                <div className='border rounded-lg bg-[#F7E6FF] w-[370px] h-[100px] mt-2'>
                  <h1 className='px-5 py-5 text-[#660099] text-xl font-bold'>Post Graduate from IIT G, GATE- <br />CSE'20 AIR - 202 </h1>
                </div>
                <br /><br /><br /><br />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
