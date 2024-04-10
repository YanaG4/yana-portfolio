import React from 'react';
import { Link } from 'react-scroll';

import './NavBar.css';

interface NavItem {
  to: string;
  text: string;
}

const HEADER_HEIGHT = 72;

const navItems: NavItem[] = [
  { to: 'home', text: 'HOME' },
  { to: 'responsibilities', text: 'RESPONSIBILITIES' },
  { to: 'projects', text: 'PROJECTS' },
  { to: 'skills', text: 'SKILLS' },
];
export default function NavBar() {

  return (
    <nav className="navbar--top">
      <ul>
      {navItems.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            smooth={true}
            duration={500}
            offset={-HEADER_HEIGHT}
            spy={true}
            className='navbar__link--top'
            activeClass='navbar__link--active'
          >
            {item.text}
          </Link>
        </li>
      ))}
      </ul>
  </nav>
  )
}
