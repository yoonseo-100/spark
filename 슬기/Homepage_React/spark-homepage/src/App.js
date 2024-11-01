import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import ReactRouter from './R089_reactRouter';
import ReactRouter2 from './R089_reactRouter2';
import '../css/new.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ReactRouter />} />
            <Route path="/reactRouter2" element={<ReactRouter2 />} />
          </Routes>
          <Footer />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
