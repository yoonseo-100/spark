import React, { Component } from 'react';
import './Loading.css';
import logo from './Spark.png'; // 이미지 경로가 정확한지 확인하세요.

class Loading extends Component {
  handleButtonClick = () => {
    // 부모 컴포넌트(App.js)의 콜백 함수를 호출하여 로딩 상태를 false로 변경
    this.props.onFinishLoading();
  };

  render() {
    return (
      <div className="Loading">
        <header className="Loading-header">
          <img src={logo} className="Loading-logo" alt="logo" />
          <p>
            Welcome <code> to </code> SPARK EDU
          </p>
          <button
            className="Loading-button"
            onClick={this.handleButtonClick}
          >
            Go To Page
          </button>
        </header>
      </div>
    );
  }
}

export default Loading;
