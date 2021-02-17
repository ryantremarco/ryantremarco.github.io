import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <h1 className="title">Ryan Tremarco</h1>
      </Link>
    </div>
    <div className="navbar-start">
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/about">About Me</Link>
      <Link className="navbar-item" to="/dev">Development</Link>
      <Link className="navbar-item" to="/misc">Misc</Link>
    </div>
    <div className="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <Link class="button is-primary" to="/contact">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              <span>Contact</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;