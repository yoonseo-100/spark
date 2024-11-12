import React from 'react';
import './Head.css'; // 필요에 따라 스타일링 파일 추가

function Head() {
  return (
    <div className="head-container">
      <button className="head-button">Login</button>
      <button className="head-button">Sign Up</button>
      <button className="head-button">Profile</button>
      <button className="head-button">Language</button>
    </div>
  );
}

export default Head;
