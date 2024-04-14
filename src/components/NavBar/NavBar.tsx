import { useState, useEffect, useRef } from 'react';
import { Link } from '../LinkWrapper/LinkWrapper';
import { navItems } from '../../constants/siteNavigation/siteNavigation';

import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef<any>(null);

  useEffect(() => { 
    let timer: NodeJS.Timeout | number | undefined = undefined;;
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (timer) clearTimeout(timer);
      if(burgerRef.current && !burgerRef.current.contains(event.target)) {
        timer = setTimeout(() => setIsOpen(false), 200);
      }
    };
    document.addEventListener('mouseup', handleClick);
    document.addEventListener('touchend', handleClick);
    return () => {
      document.removeEventListener('mouseup', handleClick);
      document.removeEventListener('touchend', handleClick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className="navbar--top">
      <div className={`nav-links ${isOpen ? 'nav-links--open' : 'nav-links--close'}`}>
      {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            text={item.text}
            className='navbar__link--top'
            activeClass='navbar__link--active'
          />
      ))}
      </div>      
      <button ref={burgerRef} className={`navbar__burger ${isOpen ? 'navbar__burger--cross' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
  </nav>
  )
}
