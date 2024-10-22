import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';  // Home.js 컴포넌트 불러오기
import About from './About';  // About.js 컴포넌트 불러오기

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to React Routing</h1>

        {/* 버튼을 클릭하면 /about 경로로 이동 */}
        <Link to="/about">
          <button>Go to About</button>
        </Link>

        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* 기본 홈 화면 */}
          <Route path="/about" element={<About />} />  {/* /about 경로로 이동하면 About.js를 렌더링 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
