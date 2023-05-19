import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import HomePage from "./Pages/HomePage";
import Footer from './Components/Footer'
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return(
  <React.StrictMode>
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
  );
}

export default App;