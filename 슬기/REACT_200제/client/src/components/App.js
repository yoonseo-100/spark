import React, { Component } from 'react';
import HeaderAdmin from './Header/HeaderAdmin';
import Footer from './Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import ReactRouter from './R089_reactRouter';
import ReactRouter2 from './R089_reactRouter2';

// CSS
import '../css/new.css';

// LoginForm 컴포넌트 import
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/reactRouter" element={<ReactRouter />} />
          <Route path="/reactRouter2" element={<ReactRouter2 />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
