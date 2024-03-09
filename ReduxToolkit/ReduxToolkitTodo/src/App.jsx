import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-3xl text-white'>Learn React with Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
