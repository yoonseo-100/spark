import React, { Component } from 'react';
import './App.css';
import Loading from './Component/Loading';
import Head from './Component/Common/Header/Head'; // 경로 확인 필요
import Header from './Component/Common/Header/Header'; // 경로 확인 필요

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      language: 'EN', // 초기 언어는 영어로 설정
    };
  }

  componentDidMount() {
    // 5초 후에 로딩을 종료
    this.timer = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트될 때 타이머 정리
    clearTimeout(this.timer);
  }

  handleLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    const { isLoading, language } = this.state;

    return (
      <div className="App">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Head onLanguageChange={this.handleLanguageChange} />
            <Header language={language} />
            <h1>Homepage</h1>
          </>
        )}
      </div>
    );
  }
}

export default App;
