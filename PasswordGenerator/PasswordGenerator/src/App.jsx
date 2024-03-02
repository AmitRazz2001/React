import { useCallback, useEffect, useRef, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // useRef Hook
  const passwordRef = useRef(null);

  const showToastMessage = () => {
    toast.success("Password Copied !", {
      position: 'top-right',
    });
  }
  const passwordGenerate = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
      if(numAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*()_+=][{}?>.,<"

      for (let i = 1; i <= length; i+=1){
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },
    [length, numAllowed, charAllowed, setPassword]
  )
  
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    showToastMessage()
  }, [password])

  useEffect(
      () => {
        passwordGenerate()
      }, [length, numAllowed, charAllowed, passwordGenerate]
  )
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-700 px-4 mt-16 font-["Neue_Montreal"]'>
        <h1 className='text-center text-3xl py-8 text-white'>Password Generator</h1>
        <div className='inputBox flex overflow-hidden'>
          <input type="text" 
                 value={password}
                 className="outline-none w-full py-2 px-3 rounded-l-lg text-orange-400 text-xl font-md"
                 placeholder='Password'
                 ref={passwordRef}
                 readOnly
          />
          <button onClick={copyToClipboard} className='outline-none shrink-0 bg-blue-600 text-white rounded-r-md text-lg pl-2 pr-2 px-3'>copy</button>
        </div>
        <div className='flex leading-none tracking-wide text-orange-400 my-4 pb-6'>
          <div className='flex items-center mt-[8px]'>
            <input type="range" 
                   min = {6}
                   max = {100}
                   value = {length}
                   className="cursor-pointer"
                   onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='text-[15px] font-medium px-1'>Length : {length}</label>

            <input type="checkbox" 
                   defaultChecked = {numAllowed}
                   className="cursor-pointer ml-3"
                   onChange={() => {setNumAllowed((prev) => !prev)}}
            />
            <label className='text-[15px] font-medium px-1'>Numbers</label>

            <input type="checkbox" 
                   defaultChecked = {charAllowed}
                   className="cursor-pointer ml-3"
                   onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label className='text-[15px] font-medium px-1'>Characters</label>
          </div>
        </div>
      </div> 
      <ToastContainer position="top-right"/>  
    </>
  )
}

export default App
