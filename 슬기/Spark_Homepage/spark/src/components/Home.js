// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Spark Edu</h2>
      <p>This is the Home page.</p>
      <Link to="/">Go back to Main</Link>
    </div>
  );
}

export default Home;
