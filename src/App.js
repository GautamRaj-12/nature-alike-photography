import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Main/> 
      <Gallery/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
