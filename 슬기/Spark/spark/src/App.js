import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Component/Loading';
import Head from './Component/Common/Header/Head'; // 경로 확인 필요
import Header from './Component/Common/Header/Header'; // 경로 확인 필요


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 5초 후에 로딩을 종료
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Head />
          <Header />
          <h1>Homepage</h1>
        </>
      )}
    </div>
  );
}

export default App;
