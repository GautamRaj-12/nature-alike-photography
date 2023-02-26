import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Gallery from "../components/Gallery/Gallery";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import React from 'react'

function Home() {
  return (
    <>
        <Navbar />
        <Main/>
        <Gallery/>
        <About/>
        <Contact/>
        <Footer/>        
    </>
  )
}

export default Home