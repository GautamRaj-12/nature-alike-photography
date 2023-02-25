import "./App.css"
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Main/> 
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
