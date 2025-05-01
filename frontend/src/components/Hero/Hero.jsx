import React from 'react';
import { assets } from '../../assets/assets'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import bgPattern from '../../assets/bgpattern.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate=useNavigate()
  const handleNavigate=()=>{
   navigate('/menu')
  }
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#fdf8f4]">
      
    {/* Background pattern */}
    <div
      className="absolute  inset-0 bg-cover opacity-30"
      style={{ backgroundImage: `url(${bgPattern})` }}
    />
    <div className='relative'>
    <h1 className='md:text-7xl mt-30 text-5xl font-extrabold text-center text-brown-500'>SIP THAT COMPLETES YOUR DAY</h1>
    <div className='md:grid md:grid-cols-3 grid-cols-1 flex flex-col justify-center items-center gap-15 py-20'>
    <div className='flex flex-col justify-center px-20'>
    <div className='flex py-10 '>
    <img
        src="https://i.pravatar.cc/40?img=7"
        alt="avatar"
        className="w-10 h-10  -translate-x-0 rounded-full border-2 border-amber-50 object-cover"
      />
       <img
        src="https://i.pravatar.cc/40?img=6"
        alt="avatar"
        className="w-10 h-10 -translate-x-4  rounded-full border-2 border-amber-50 object-cover"
      />
       <img
        src="https://i.pravatar.cc/40?img=5"
        alt="avatar"
        className="w-10 h-10 rounded-full -translate-x-7 border-2 border-amber-50 object-cover"
      />
        <h1 className='font-bold flex justify-center items-center text-brown-500 text-2xl'>1M+</h1>
      </div>
      <h1 className='font-semibold text-brown-500'>Satisfied-customers</h1>
      <img src={assets.grains} className='w-50'/>
    </div>
    <div className='relative rounded-full h-[300px] md:h-[400px] md:w-[400px] w-[300px] '>
    <div className='bg-orange-500  overflow-hidden rounded-full h-[300px] md:h-[400px] md:w-[400px] w-[300px] '>
    
    <img src={assets.starbucks} className='h-[500px] -translate-y-10 w-[500px]'/>
    <img src={assets.logo} className='absolute top-4 right-4 w-20 md:w-24 lg:w-28'/>
    </div>
    </div>
    <div className='md:text-start  flex flex-col justify-center items-center max-w-5xl px-10'>
      <p className='font-semibold text-brown-500'>Complete your day with the perfect balance of warmth
       and flavor in every cup, bringing energy and life to every moment.
      </p>
      <button onClick={()=>handleNavigate()} className='relative mt-10 bg-brown-500 rounded-full p-3 w-40 font-bold text-white justify-center items-center flex'>
        Shop now <IoArrowForwardCircleOutline size={30} className='ml-5'/>
      </button>
    </div>
    </div>
 </div>

  </section>
  );
};

export default Hero;
