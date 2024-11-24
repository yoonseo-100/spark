import React, { Component } from 'react';
import './App.css';
import Loading from './Component/Loading';
import Head from './Component/Common/Header/Head';
import Header from './Component/Common/Header/Header';
import Footer from './Component/Common/Footer/Footer';

import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import MainTeacher from './Component/Pages/MainTeacher';
import Lecture from './Component/Pages/Lecture';
import Purchase from './Component/Pages/Purchase';
import Classroom from './Component/Pages/Classroom';
import Contact from './Component/Pages/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      language: 'EN',
      currentPage: 'Home', // 초기 페이지
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleLanguageChange = (language) => {
    this.setState({ language });
  };

  navigateToPage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { isLoading, language, currentPage } = this.state;

    let CurrentPageComponent;
    switch (currentPage) {
      case 'Home':
        CurrentPageComponent = <Home />;
        break;
      case 'About':
        CurrentPageComponent = <About />;
        break;
      case 'MainTeacher':
        CurrentPageComponent = <MainTeacher />;
        break;
      case 'Lecture':
        CurrentPageComponent = <Lecture />;
        break;
      case 'Purchase':
        CurrentPageComponent = <Purchase />;
        break;
      case 'Classroom':
        CurrentPageComponent = <Classroom />;
        break;
      case 'Contact':
        CurrentPageComponent = <Contact />;
        break;
      default:
        CurrentPageComponent = <Home />;
    }

    return (
      <div className="App">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Head onLanguageChange={this.handleLanguageChange} />
            {/* navigateToPage 함수 전달 */}
            <Header language={language} navigateToPage={this.navigateToPage} />
            <div className="content">{CurrentPageComponent}</div>
            <Footer />
          </>
        )}
      </div>
    );
  }
}

export default App;
