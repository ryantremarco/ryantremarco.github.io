import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <h1 className="title">Ryan Tremarco</h1>
      </a>
    </div>
    <div className="navbar-start">
      <a className="navbar-item" href="/">Home</a>
      <a className="navbar-item" href="/about">About Me</a>
      <a className="navbar-item" href="/dev">Development</a>
      <a className="navbar-item" href="/misc">Misc</a>
    </div>
    <div className="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" href="/contact">
            <span class="icon">
              <i class="fas fa-envelope"></i>
            </span>
            <span>Contact</span>
          </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;