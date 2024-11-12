import React from 'react';
import './Header.css'; // 필요에 따라 스타일링 파일 추가

function Header() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">SPARK_EDU</a>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Main Teacher</a></li>
        <li><a href="#services">Lecture</a></li>
        <li><a href="#services">Purchase</a></li>
        <li><a href="#services">Classroom</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;