import React from 'react';
import { Link } from 'react-scroll';

import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar--top">
      <ul>
        <li><Link to="home" smooth={true} duration={500} offset={-72} spy={true} className='navbar__link--top' activeClass='navbar__link--active'>HOME</Link></li>
        <li><Link to="responsibilities" smooth={true} duration={500} offset={-72} spy={true} className='navbar__link--top' activeClass='navbar__link--active'>RESPONSIBILITIES</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-72} spy={true} className='navbar__link--top' activeClass='navbar__link--active'>PROJECTS</Link></li>
        <li><Link to="skills" smooth={true} duration={500} offset={-72} spy={true} className='navbar__link--top' activeClass='navbar__link--active'>SKILLS</Link></li>
      </ul>
  </nav>
  )
}
