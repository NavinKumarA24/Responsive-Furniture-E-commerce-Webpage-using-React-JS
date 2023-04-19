

import './component/Login.css'
import Header from './component/Header';

import React from 'react'
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import Services from './component/Services';
import About from './component/About';
import Contact from './component/Contact';
import Shop from './component/Shop';
import Cart from './component/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      <Route path="Login" element={<Login />} />
      <Route path="Services" element={<Services />} />
      <Route path="About" element={<About />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
