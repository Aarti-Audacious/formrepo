import React from 'react';
import Home from '../Component/Home';
import Contact from '../Component/Contact';
import About from '../Component/About';
import Notfound from '../Component/Notfound';
import { Routes, Route, Link } from "react-router-dom";
import Mystate from '../Component/UseState/Mystate';
const Routing = () => {
  return (
    <>
      
      <Routes>
        
     <Route path="/" element={<Home />} />
     <Route path="About" element={<About />} />
     <Route path="Contact" element={<Contact />} />
     <Route path="Mystate" element={<Mystate />} />
     <Route path="*" element={<Notfound />} />

     </Routes>
    </>
  )
  
};

export default Routing;
