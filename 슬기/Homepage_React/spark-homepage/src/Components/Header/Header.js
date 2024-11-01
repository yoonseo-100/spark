import React from 'react';

function Header() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a className="nav-link active" href="#" onClick={(e) => e.preventDefault()}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
