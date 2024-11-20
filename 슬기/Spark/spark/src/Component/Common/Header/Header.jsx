import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuIndex: null, // 현재 활성화된 메뉴 인덱스
    };
  }

  toggleMenu = (index) => {
    this.setState((prevState) => ({
      activeMenuIndex: prevState.activeMenuIndex === index ? null : index, // 동일한 메뉴를 클릭하면 닫힘
    }));
  };

  render() {
    const { language } = this.props;
    const { activeMenuIndex } = this.state;

    const menuItems = language === 'KR'
      ? [
          { href: '#home', text: '홈', details: ['세부사항1', '세부사항2', '세부사항3'] },
          { href: '#about', text: '회사소개', details: ['세부사항1', '세부사항2', '세부사항3'] },
          { href: '#services', text: '대표강사', details: ['세부사항1', '세부사항2', '세부사항3'] },
          { href: '#services', text: '강의 수강', details: ['세부사항1', '세부사항2', '세부사항3'] },
          { href: '#services', text: '구매', details: ['세부사항1', '세부사항2', '세부사항3'] },
          { href: '#services', text: '강의실', details: ['세부사항1', '세부사항2', '세부사항3'] },
          { href: '#contact', text: '문의', details: ['세부사항1', '세부사항2', '세부사항3'] },
        ]
      : [
          { href: '#home', text: 'Home', details: ['Detail 1', 'Detail 2', 'Detail 3'] },
          { href: '#about', text: 'About', details: ['Detail 1', 'Detail 2', 'Detail 3'] },
          { href: '#services', text: 'Main Teacher', details: ['Detail 1', 'Detail 2', 'Detail 3'] },
          { href: '#services', text: 'Lecture', details: ['Detail 1', 'Detail 2', 'Detail 3'] },
          { href: '#services', text: 'Purchase', details: ['Detail 1', 'Detail 2', 'Detail 3'] },
          { href: '#services', text: 'Classroom', details: ['Detail 1', 'Detail 2', 'Detail 3'] },
          { href: '#contact', text: 'Contact', details: ['Detail 1', 'Detail 2', 'Detail 3'] },
        ];

    return (
      <nav className="navbar">
        <a href="/" className="navbar-logo">SPARK_EDU</a>
        <ul className="navbar-links">
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <a href={item.href} onClick={() => this.toggleMenu(index)}>{item.text}</a>
              {/* 세부 사항 표시 */}
              {activeMenuIndex === index && (
                <ul className="submenu">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="menu-icon">
          {/* 메뉴 아이콘 */}
          <span>☰</span>
        </div>
      </nav>
    );
  }
}

export default Header;
