import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar--top">
      <ul className={`nav-links ${isOpen ? 'nav-links--open' : 'nav-links--close'}`}>
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
      <button className={`navbar__burger ${isOpen ? 'navbar__burger--cross' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
  </nav>
  )
}
