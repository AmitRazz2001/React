import React from 'react'
import Products from './Products'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 p-4 flex flex-row'>
        <div className='w-32 h-32 bg-red-700 rounded-xl p-3 text-white'>Hello this is red div</div>
        <Products data="Amit" data2={{name:"Amit", age:22}}/>
    </div>
  )
}

export default App

