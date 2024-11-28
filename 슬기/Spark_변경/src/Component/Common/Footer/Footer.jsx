import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-top">
          <ul className="footer-links">
            <li><a href="#company">회사소개</a></li>
            <li><a href="#privacy">개인정보처리방침</a></li>
            <li><a href="#event-privacy">이벤트 개인정보처리방침</a></li>
            <li><a href="#support">콘텐츠창작지원</a></li>
            <li><a href="#business">비즈니스 제휴제안</a></li>
            <li><a href="#legal">인강법률규정</a></li>
            <li><a href="#fund">기인증 채무자금보증안내</a></li>
          </ul>
        </div>
        <div className="footer-middle">
          <p>ⓒSPARK_EDU 주소쓰는 부분, 000빌딩 (우:00000)      Tel 000)0000-0000      Fax 000)0000-0000</p>
          <p>사업자등록번호 000-00-00000 통신판매업신고 2021-인천어딘가-2211 사업자정보확인 대표이사: 백윤서 호스팅서비스 사업자: ⓒSPART_EDU</p>
          <a href="mailto:spark_edu@gmail.com">spark_edu@gmail.com</a>
        </div>
        <div className="footer-bottom">
          <p>Copyright ⓒSPARK_EDU. All rights reserved.</p>
          <div className="footer-icons">
            <img src="link-to-icon" alt="Certification 1" />
            <img src="link-to-icon" alt="Certification 2" />
            <img src="link-to-icon" alt="Certification 3" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
