import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import Home from "./components/home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Project from './components/project';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Navbar />
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/project" element={<Project/>} />
            </Routes>
          <Footer />
       </Router>
        </div>
      );
  }
}

export default App;