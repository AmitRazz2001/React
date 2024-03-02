import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Layout,About, Contact, Home, User, Github, GithubAccuontInfo } from './components'
import './index.css'

// First method of routing

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:
//     [
//       {
//         path:'',
//         element: <Home />
//       },
//       {
//         path:'about',
//         element: <About />
//       },
//       {
//         path:'contact',
//         element: <Contact />
//       }
//   ]
//   }
// ])

// Second method of routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
          loader={GithubAccuontInfo}
          path='github' 
          element={<Github/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
