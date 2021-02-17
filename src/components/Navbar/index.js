import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [burgerActive, setBugerActive] = React.useState(false);

  const NavbarLink = ({to, button=false, children}) => (
    <Link 
      className={`navbar-item ${button ? 'button' : ''}`}
      to={to}
      // Bulma normally handles this, but not the link resolves to the current component (/, /home)
      onClick={() => setBugerActive(false)}
    >
      {children}
    </Link>
  )

  return <nav className="navbar is-primary">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <p className="title is-size-3">Ryan Tremarco</p>
      </Link>
      <a 
        class={`navbar-burger burger ${burgerActive? 'is-active' : ''}`}
        data-target="navbar-content"
        onClick={() => setBugerActive(!burgerActive)}
      >
        <span></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar-content" className={`navbar-menu ${burgerActive? 'is-active' : ''}`}>
      <div className="navbar-start">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About Me</NavbarLink>
        <NavbarLink to="/dev">Development</NavbarLink>
        <NavbarLink to="/misc">Misc</NavbarLink>
      </div>
      <div className="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <NavbarLink button to="/contact">
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <span>Contact</span>
              </NavbarLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
};

export default Navbar;