import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverlayMenuOpen: false,
    };
  }

  toggleOverlayMenu = () => {
    this.setState((prevState) => ({
      isOverlayMenuOpen: !prevState.isOverlayMenuOpen,
    }));
  };

  closeOverlayMenu = () => {
    this.setState({ isOverlayMenuOpen: false });
  };

  render() {
    const { language, navigateToPage } = this.props;
    const { isOverlayMenuOpen } = this.state;

    const menuItems = language === 'KR'
      ? ['홈', '회사소개', '대표강사', '강의 수강', '구매', '강의실', '문의']
      : ['Home', 'About', 'Main Teacher', 'Lecture', 'Purchase', 'Classroom', 'Contact'];

    const menuKeys = ['Home', 'About', 'MainTeacher', 'Lecture', 'Purchase', 'Classroom', 'Contact'];

    return (
      <nav className="navbar">
        <a href="/" className="navbar-logo">SPARK_EDU</a>
        <ul className="navbar-links">
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => navigateToPage(menuKeys[index])}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="menu-icon" onClick={this.toggleOverlayMenu}>
          {isOverlayMenuOpen ? '✖' : '☰'}
        </div>
        {isOverlayMenuOpen && (
          <div className="overlay-menu" onClick={this.closeOverlayMenu}>
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
              <h2>Menu</h2>
              <ul className="menu-items">
                {menuItems.map((item, index) => (
                  <li key={index} onClick={() => navigateToPage(menuKeys[index])}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

export default Header;
