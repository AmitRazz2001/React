import React from 'react'

function Card(props) {
    console.log(props.myObj)
  return (
   <>
    <div className='bg-green-400 p-4 font-semibold rounded-md mb-2 cursor-pointer'
    onClick={() => {window.location.reload()}}>React Aur Tailwind CSS</div>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black w-500px">
        <img
        src="https://source.unsplash.com/300x300/?random"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{props.myObj.title}</h2>
        </div>
        <p className="text-gray-300">
        {props.myObj.description}
        </p>
    </div>
    </>
 )
}

export default Card