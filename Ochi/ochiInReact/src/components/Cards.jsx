import React from 'react'

function Cards() {
  return (
    <div className='w-full flex gap-5 h-screen bg-zinc-900 items-center px-16'>
        <div className='cardcontainer w-1/2 h-[60vh]'>
            <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex justify-center items-center'>
                <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-[10px] py-[3px] left-[1.5rem] bottom-[30px] border-[1px] border-[#CDEA68] text-[#CDEA68] text-sm font-medium rounded-full'>&copy;2023-2024</button>
            </div>
        </div>
        <div className='cardcontainer w-1/2 h-[60vh] flex gap-5'>
            <div className='card relative w-1/2 rounded-xl h-full bg-[#163834] flex justify-center items-center'>
                <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-[10px] py-[3px] left-[1.5rem] bottom-[30px] border-[1px] text-sm rounded-full uppercase'>rating 5.0 on clutch</button>
            </div>
            <div className='card relative w-1/2 rounded-xl h-full bg-[#163834] flex justify-center items-center'>
                <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-[10px] py-[3px] left-[1.5rem] bottom-[30px] border-[1px] text-sm rounded-full uppercase'>business bootcamp allumini</button>
            </div>
        </div>
    </div>
  )
}

export default Cards