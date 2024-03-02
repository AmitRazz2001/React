import React, { useState } from 'react'

function Products({data, data2}) {

    var [a,b] = useState(data2);
    var [c,d] = useState(false);

  return (
    <div className='w-32 h-32 bg-white p-3 ml-2 rounded-xl'>
        <h1>{data}</h1>
        <h1 className={`${c === false ? "text-red-500" : "text-blue-700"}`}>{data2.name}</h1>
        <h1>{data2.age}</h1>
        <button onClick={()=>{d(!c); b(data2.name="Raaz")}} className='px-3 py-1 bg-green-500 text-white rounded-md mt-1'>click</button>
    </div>
  )
}

export default Products