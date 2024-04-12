import { navSections } from '../../constants/siteNavigation/siteNavigation';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='footer-nav'>
        {navSections.map((item) => (
          <FooterLinks 
            key={item.title} 
            title={item.title} 
            links={item.links} 
            linkType={item.linkType} 
          />
        ))}
        <FooterSocials />
      </div>
      <div className='footer-personal'>
        <a href="https://www.linkedin.com/in/yana-glushychkina-5a5592263" target="_blank" rel="noopener noreferrer">
          Yana G.
        </a>
        <p>sinxenon.biz@gmail.com</p>
        <p>2024</p>
      </div>
    </footer>
  )
}
