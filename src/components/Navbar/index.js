import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

  const [burgerActive, setBugerActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navVisible =  (scrollPosition > currentScrollPos) || (currentScrollPos <= 0);
      document.getElementById("navbar").style.top = navVisible? "0px" : "-75px";
      setScrollPosition(currentScrollPos);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[scrollPosition, setScrollPosition]);

  const NavbarLink = ({to, button=false, children}) => (
    <HashLink 
      className={`navbar-item ${button ? 'button' : ''}`}
      smooth
      to={to}
      // Bulma normally handles this, but not when using anchors :(
      onClick={() => setBugerActive(false)}
    >
      {children}
    </HashLink>
  )

  return <nav id="navbar" className="navbar is-fixed-top">
    <div className="navbar-brand">
      <a 
        className={`navbar-burger burger ${burgerActive? 'is-active' : ''}`}
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