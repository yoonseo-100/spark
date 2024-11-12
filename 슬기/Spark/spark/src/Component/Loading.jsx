import React, { Component } from 'react';
import './Loading.css';
import logo from './Spark.png'; // 이미지 경로가 정확한지 확인하세요.

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <header className="Loading-header">
          <img src={logo} className="Loading-logo" alt="logo" />
          <p>
            Welcome <code> to </code> SPARK EDU
          </p>
          <a
            className="Loading-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More {/* <More>에서 "More"로 변경하여 올바른 텍스트로 수정 */}
          </a>
        </header>
      </div>
    );
  }
}

export default Loading;
