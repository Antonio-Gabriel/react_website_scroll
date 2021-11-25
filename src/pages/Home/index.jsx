import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

// import { Container } from './styles';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);    
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={handleToggleMenu}/>
      <Navbar toggle={handleToggleMenu}/>
      <Hero/>
    </>
  );
}

export default Home;
