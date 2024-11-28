import React from 'react';
import './Back.css'; // 스타일링 필요 시

const Back = ({ title }) => {
  // window.location.pathname을 사용하여 현재 경로 가져오기
  const path = window.location.pathname.split('/')[1] || 'Home';

  return (
    <>
      <section className='back'>
        <h2>Home / {path}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Back;
