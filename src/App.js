import React from "react";
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from './components/Services/Services'
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <>
          <Navbar/>
          <Header/>
          <About/>
          <Services/>
          <Portfolio/>
    </>
  );
}

export default App;
