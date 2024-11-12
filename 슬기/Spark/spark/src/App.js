import React, { Component } from 'react';
import './App.css';
import Loading from './Component/Loading';
import Head from './Component/Common/Header/Head';
import Header from './Component/Common/Header/Header';
import Footer from './Component/Common/Footer/Footer';
import Back from './Component/Common/Back/Back';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      language: 'EN',
    };
  }

  componentDidMount() {
    // 5초 후에 자동으로 로딩을 종료하는 타이머 설정
    this.timer = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  componentWillUnmount() {
    // 타이머 정리
    clearTimeout(this.timer);
  }

  handleLanguageChange = (language) => {
    this.setState({ language });
  };

  handleFinishLoading = () => {
    // 로딩 상태를 false로 변경
    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading, language } = this.state;

    return (
      <div className="App">
        {isLoading ? (
          <Loading onFinishLoading={this.handleFinishLoading} />
        ) : (
          <>
            <Head onLanguageChange={this.handleLanguageChange} />
            <Header language={language} />
            <Back title="Homepage" />
            <h1>Homepage</h1>
            <Footer />
          </>
        )}
      </div>
    );
  }
}

export default App;
