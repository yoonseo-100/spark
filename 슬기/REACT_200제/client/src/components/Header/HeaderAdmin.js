import React from 'react';

function HeaderAdmin() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a className="nav-link active" href="#" onClick={(e) => e.preventDefault()}>
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default HeaderAdmin;

