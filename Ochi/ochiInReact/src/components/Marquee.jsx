import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full bg-[#004D43] py-12 rounded-tl-3xl rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:'linear', duration: 10}} className='text-[16vw] leading-none font-["Founders Grotesk"] uppercase pt-[0.5rem] mb-[1rem] font-bold pr-20'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:'linear', duration: 10}} className='text-[16vw] leading-none font-["Founders Grotesk"] uppercase pt-[0.5rem] mb-[1rem] font-bold pr-20'>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee