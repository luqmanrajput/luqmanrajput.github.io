import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        Hi there its main app
        </Routes>
      </Router>
    </>
  );
}

export default App;
