import React, { Component } from 'react';
import './Head.css';

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    const { dropdownOpen } = this.state;
    const { onLanguageChange } = this.props;

    return (
      <div className="head-container">
        <button className="head-button">Login</button>
        <button className="head-button">Sign Up</button>
        <button className="head-button">Profile</button>
        <div className="dropdown">
          <button className="head-button" onClick={this.toggleDropdown}>
            Language
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => onLanguageChange('KR')}>Korean</button>
              <button onClick={() => onLanguageChange('EN')}>English</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Head;
