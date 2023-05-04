import React from 'react'
import {BrowserRouter  ,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <>
    <BrowserRouter>

      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
     
     <Route exact path='/About' element={<About/>}/>
     
     <Route exact path='/contact' element={<Contact/>}/>
     
     <Route eaxact path='/login' element={<Login/>}/>
     
     <Route exact path='/signup' element={<Signup/>}/>
     
     <Route element={<Errorpage/>}/>
     </Routes>
     </BrowserRouter>
     


    </>
  )
}

export default App

