import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './Main';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 기존 로고와 텍스트 */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Study <code> For Your Dream </code> In Spark Academy
          </p>

          {/* Go to Spark 버튼 - 크기를 3배로 키우기 위해 CSS 클래스 추가 */}
          <Link to="/main">
            <button className="big-button">Go to Spark</button>
          </Link>

          {/* 라우트 설정 */}
          <Routes>
            <Route path="/main" element={<Main />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
