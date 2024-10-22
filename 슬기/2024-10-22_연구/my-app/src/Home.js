import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 불러오기

function Home() {
  const navigate = useNavigate(); // useNavigate 훅 사용하여 경로 변경 함수 생성

  const goToAbout = () => {
    navigate('/about'); // /about 경로로 이동
  };

  return (
    <div>
      <h2>This is the Home Page</h2>
      <button onClick={goToAbout}>Go to About Page</button>
    </div>
  );
}

export default Home;
