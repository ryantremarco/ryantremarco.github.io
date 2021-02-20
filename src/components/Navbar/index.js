import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

  const [burgerActive, setBugerActive] = React.useState(false);

  const NavbarLink = ({to, button=false, children}) => (
    <HashLink 
      className={`navbar-item ${button ? 'button' : ''}`}
      smooth
      to={to}
      // Bulma normally handles this, but not the link resolves to the current component (/, /home)
      onClick={() => setBugerActive(false)}
    >
      {children}
    </HashLink>
  )

  return <nav className="navbar is-fixed-top">
    <div className="navbar-brand">
      <a 
        class={`navbar-burger burger ${burgerActive? 'is-active' : ''}`}
        data-target="navbar-content"
        onClick={() => setBugerActive(!burgerActive)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar-content" className={`navbar-menu ${burgerActive? 'is-active' : ''}`}>
      <div className="navbar-end">
        <NavbarLink to="#about">About</NavbarLink>
        <NavbarLink to="#skills">Skills</NavbarLink>
        <NavbarLink to="#experience">Experience</NavbarLink>
        <NavbarLink to="#contact">Contact</NavbarLink>
      </div>
    </div>
  </nav>
};

export default Navbar;