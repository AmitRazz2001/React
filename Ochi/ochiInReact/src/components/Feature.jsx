import React from 'react'

function Feature() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] pb-10 border-zinc-700'>
            <h1 className='text-6xl font-["Neue Montreal"] tracking-tighter'>Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-5 mt-14'>
                <div className='relative cardcontainer w-1/2 h-[80vh]'>
                    <h1 className='absolute left-full text-8xl text-[#CDEA68] tracking-tighter leading-none -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 font-["Founders Grotesk"]'>
                        {"FYDE".split("").map((item, index) => (
                                <span>{item}</span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-lg overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className='cardcontainer w-1/2 h-[80vh]'>
                    <div className='relative card w-full h-full rounded-lg overflow-hidden'>
                        <h1 className='absolute right-full text-8xl text-[#CDEA68] tracking-tighter leading-none translate-x-1/2 top-1/2 -translate-y-1/2 z-10 font-["Founders Grotesk"]'>
                            {"VISE".split("").map((item, index) => (
                                <span>{item}</span>
                            ))}
                        </h1>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature