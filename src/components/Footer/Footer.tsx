import React from 'react';
import { navItems } from '../../constants/siteNavigation';

export default function Footer() {
  return (
    <footer className="footer">
      {/* {navItems.map((item) => (
        <div key={item.to} className="footer-section">
          <h4 className="footer-title">{item.text}</h4>
          <ul className="footer-links">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </footer>
  )
}
