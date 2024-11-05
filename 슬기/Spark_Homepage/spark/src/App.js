import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <header className="App-header">
        <h1>Welcome to Spark Edu</h1>
        <h4>Make Your Dream Come True</h4>
      </header>
    </div>
  );
}

export default App;
