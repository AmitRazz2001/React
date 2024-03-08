import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ThemeButton from './Components/ThemeButton'
import {ThemeProvider } from './Contexts/Theme'


function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Actual theme change
  useEffect(() => {
      let element = document.querySelector('html')
      element.classList.remove("light", "dark")
      element.classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center ml-[470px]">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>   

  )
}

export default App
