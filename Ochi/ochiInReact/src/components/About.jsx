import React from 'react'

function About() {
  return (
    <div className='w-full bg-[#CDEA68] p-20 rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue Montreal"] text-[3.5vw] leading-[4.5vw] tracking-tighter'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='flex gap-5 w-full border-t-[1px] mt-20 border-[#b5ce64]'>
            <div className='w-1/2'>
                <h1 className='text-6xl my-2'>Our approach:</h1>
                <button className='flex items-center gap-8 px-6 py-4 bg-zinc-900 mt-8 rounded-full text-white uppercase'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
                
            </div>
            <div className='w-1/2 h-[70vh] my-2 rounded-xl bg-[#7d9729]'></div>
        </div>
    </div>
  )
}

export default About