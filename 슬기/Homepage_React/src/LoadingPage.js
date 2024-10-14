import React from 'react';
import './loading.css';

function LoadingPage() {
  return (
    <div className="loading-container">
      <div className="earth-wrapper">
        <img src="img/earth.png" alt="Rotating Earth" className="rotating-earth" />
      </div>
      <p className="loading-text">Loading... Please wait</p>
    </div>
  );
}
const loadingStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontSize: '1.5rem',
  backgroundColor: '#f0f0f0'
};

export default LoadingPage;
