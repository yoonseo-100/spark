import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    const { language } = this.props;

    const menuItems = language === 'KR'
      ? [
          { href: '#home', text: '홈' },
          { href: '#about', text: '회사소개' },
          { href: '#services', text: '대표강사' },
          { href: '#services', text: '강의 수강' },
          { href: '#services', text: '구매' },
          { href: '#services', text: '강의실' },
          { href: '#contact', text: '문의' },
        ]
      : [
          { href: '#home', text: 'Home' },
          { href: '#about', text: 'About' },
          { href: '#services', text: 'Main Teacher' },
          { href: '#services', text: 'Lecture' },
          { href: '#services', text: 'Purchase' },
          { href: '#services', text: 'Classroom' },
          { href: '#contact', text: 'Contact' },
        ];

    return (
      <nav className="navbar">
        <a href="/" className="navbar-logo">SPARK_EDU</a>
        <ul className="navbar-links">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Header;
