import React, { useState, useEffect } from 'react';
import LoadingPage from './LoadingPage'; // LoadingPage 컴포넌트 가져오기

function MainPage() {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  useEffect(() => {
    // 15초 후에 로딩 상태를 false로 전환
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 15000); // 15000ms = 15초

    // 타이머를 정리하여 메모리 누수를 방지
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />; // 로딩 중일 때는 LoadingPage를 렌더링
  }

  return (
    <div>
      {/* 메인 페이지 내용 */}
      <header className="header">
        <div className="logo">Sia's Academy</div>
        <nav className="nav">
          <a href="#">Subjects</a>
          <a href="#">Students</a>
          <a href="#">Instructors</a>
          <a href="#">Help</a>
          <a href="#">Sign In</a>
        </nav>
      </header>

      <div className="banner">
        <div>
          <h1>Welcome to Sia's Academy</h1>
          <p>A place dedicated to helping students and instructors grow.</p>
          <div>
            <a href="#" className="button">Sign up for a lesson</a>
            <a href="#" className="button">Become an instructor</a>
          </div>
        </div>
      </div>

      <section className="container">
        <h2 className="text-center">Subjects</h2>
        <p className="text-center">Our instructors teach a variety of subjects, from English and math to science and humanities.</p>
        <a href="#" className="view-all-button">View all 20 subjects</a>
        <div className="subjects-grid">
          <div className="card">
            <img src="img/english.jpg" alt="English" />
            <h3>English</h3>
            <p>Learn how to read, write, and speak English fluently.</p>
          </div>
          <div className="card">
            <img src="img/math.jpg" alt="Math" />
            <h3>Math</h3>
            <p>Master the art of numbers and solve complex problems.</p>
          </div>
          <div className="card">
            <img src="img/science.jpg" alt="Science" />
            <h3>Science</h3>
            <p>Discover the world of biology, chemistry, and physics.</p>
          </div>
          <div className="card">
            <img src="img/accountancy.jpg" alt="Accountancy" />
            <h3>Accountancy</h3>
            <p>Understand the principles of financial accounting and management.</p>
          </div>
          <div className="card">
            <img src="img/humanities.jpg" alt="Humanities" />
            <h3>Humanities</h3>
            <p>Explore the history, culture, and art of different civilizations.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Join over 100,000 students. Get instant access to our library of free lessons and start learning today.</p>
        <a href="#" className="button">Sign up for free</a>
      </footer>
    </div>
  );
}

export default MainPage;
