import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Token from "./components/Token/Token";
import Home from "./components/Home/Home";
import Survey from "./components/Survey/Survey";
import Polling from "./components/Polling/Polling";
import Logout from "./components/Logout/Logout";
//import WalletCard from './components/Token/WalletCard';


const App = () => {
  return (<>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Token" element={<Token />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Survey" element={<Survey />} />
          <Route path="/Polling" element={<Polling />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  </>
  );
}

export default App;