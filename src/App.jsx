import { useState } from 'react'
import HomePage from './pages/HomePage'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './componets/NavBar';

function App() {
  
  return (
    <>
    <NavBar/>

    <Routes>
    <Route path ="/" element={<HomePage/>}/>
    </Routes>
 
    
    </>
   
  )
}

export default App
