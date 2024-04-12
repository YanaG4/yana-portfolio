import { useState, useEffect, useRef } from 'react';
import { Link } from '../LinkWrapper/LinkWrapper';
import { navItems } from '../../constants/siteNavigation/siteNavigation';

import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef<any>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if(burgerRef.current && !burgerRef.current.contains(event.target))
        setIsOpen(false);
    };
    document.addEventListener('mouseup', handleClick);
    document.addEventListener('touchend', handleClick);
    return () => {
      document.removeEventListener('mouseup', handleClick);
      document.removeEventListener('touchend', handleClick);
    };
  }, []);

  return (
    <nav className="navbar--top">
      <ul className={`nav-links ${isOpen ? 'nav-links--open' : 'nav-links--close'}`}>
      {navItems.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            text={item.text}
          />
        </li>
      ))}
      </ul>      
      <button ref={burgerRef} className={`navbar__burger ${isOpen ? 'navbar__burger--cross' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
  </nav>
  )
}
