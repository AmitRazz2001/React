import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from './components/Card.jsx'
import './index.css'
let myObj = {title:'Test Title', description:'test description'}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card myObj={myObj}/>
  </React.StrictMode>
)
