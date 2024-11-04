import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './CustomNavbar.css';

function CustomNavbar() {
  const [isKorean, setIsKorean] = useState(false); // 한국어/영어 상태 관리
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // 한글과 영어로 변환할 메뉴 항목 데이터
  const menuItems = isKorean
    ? [
        { href: '/about', text: '회사소개' },
        { href: '/main-teacher', text: '대표강사소개' },
        { href: '/lecture', text: '강의수강' },
        { href: '/event', text: '이벤트' },
        { href: '/inform', text: '공지사항' },
        { href: '/classroom', text: '강의실' },
        { href: '/mou', text: '협력단체' },
      ]
    : [
        { href: '/about', text: 'About' },
        { href: '/main-teacher', text: 'Main Teacher' },
        { href: '/lecture', text: 'Lecture' },
        { href: '/event', text: 'Event' },
        { href: '/inform', text: 'Inform' },
        { href: '/classroom', text: 'Classroom' },
        { href: '/mou', text: 'MOU' },
      ];

  // 언어 변경 함수
  const handleLanguageChange = (language) => {
    setIsKorean(language === 'KR');
  };

  return (
    <Navbar expand="md" className="custom-navbar">
      <NavbarBrand href="/" className="brand-text">SPARK EDU</NavbarBrand>
      <Nav className="ms-auto" navbar>
        {menuItems.map((item, index) => (
          <NavItem key={index}>
            <NavLink href={item.href} className="nav-link-custom">
              {item.text}
            </NavLink>
          </NavItem>
        ))}
        <NavItem>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret className="language-btn">
              {isKorean ? 'KR' : 'EN'}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => handleLanguageChange('KR')}>KR</DropdownItem>
              <DropdownItem onClick={() => handleLanguageChange('EN')}>EN</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
