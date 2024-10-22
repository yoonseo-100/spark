import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Home.js 컴포넌트
import About from './About'; // About.js 컴포넌트
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <h1>React Router Example</h1>

        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* 기본 홈 화면 */}
          <Route path="/about" element={<About />} /> {/* /about 경로로 이동하면 About.js 렌더링 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
