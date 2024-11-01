import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import ReactRouter from './reactRouter';
import ReactRouter2 from './reactRouter2';
import './css/new.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ReactRouter />} />
          <Route path="/reactRouter2" element={<ReactRouter2 />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;

