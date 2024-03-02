import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-44 px-16'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index) => 
            (
                <div className='masker'>
                    <div className='w-fit flex overflow-hidden'>
                        {index === 1 && (<motion.div 
                                            initial={{width: 0}}
                                            animate={{width: "8vw"}}
                                            transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                                            className="mr-[1px] w-[8vw] h-[5.2vw] top-[1.4vw] relative flex justify-center items-center">
                                                <img className='w-full h-full rounded-md' src="https://images.unsplash.com/photo-1525697472245-fb8fd8594791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvbG9yc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                            </motion.div>)}
                        <h1 className="pt-[2vw] mb-6 uppercase text-[8vw] leading-[.4] font-['Founders Grotesk Condensed'] font-bold">
                        {item}
                        </h1>
                    </div>
                </div>
            ))}
           
        </div>
        <div className='border-t-[2px] border-zinc-800 mt-28 flex justify-between items-center px-16 py-4'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}

            <div className='start flex'>
                <div className='px-4 py-2 border-[2px] border-zinc-800 rounded-full font-light text-md uppercase'>start the project</div>
                <div className='w-10 h-10 ml-1 border-[2px] border-zinc-800 rounded-full flex justify-center items-center'>
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage