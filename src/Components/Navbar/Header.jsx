import React from 'react';
import logo_pic from '../Assects/LOGO.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';

function Header() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo_pic} alt="" width="70" height="70" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ms-5">
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" aria-current="page" href="/about">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" aria-current="page" href="/contact">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" aria-current="page" href="/user">
                  USER
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link" aria-current="page" href="/admin">
                  ADMIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
