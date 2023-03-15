import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Specialities from './components/Specialities';
import Contact from './components/Contact';
import Policy from './components/Policy';
import Error from './components/Error';
import List from './components/List';
import Footer from './components/Footer';



const App=()=>{
  return(
    <>
    <List />
    <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route path ="/Specialities" element={<Specialities/>}/>
      <Route path ="/Contact" element={<Contact/>}/>
      <Route path ="/Policy" element={<Policy/>}/>
      <Route element={<Error/>}/>
    </Routes>
    <Footer />
    </>
  )
}
export default App;