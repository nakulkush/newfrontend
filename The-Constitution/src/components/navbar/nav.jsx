import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container-fluid">
          <a className="navbar-brand ms-5 fs-4" href="#">Logo</a>
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
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-center w-100">
              <li className="nav-item px-3">
                <a className="nav-link fs-5" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-5" href="#">About Us</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-5" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="me-5">
            <p className="mb-0">
              <a href="/login" className="me-2 text-decoration-none text-dark">Login</a>/
              <a href="/signup" className="ms-2 text-decoration-none text-dark">Sign Up</a>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
