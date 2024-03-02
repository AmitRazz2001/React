import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const increaseCounter = () => {
    if(count != 22) setCount(count + 1) 
  }
  const decreaseCounter = () => {
      if(count != 0) setCount(count - 1) 
  }
  return (
    <>
     <h3>Counter {count}</h3>
     <button onClick={increaseCounter}>Increase - {count}</button>
     <button onClick={decreaseCounter}>Decrease - {count}</button>
    </>
  )
}

export default App
