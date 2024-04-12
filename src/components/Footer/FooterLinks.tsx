import React from 'react';
import type { NavSection, NavItem } from '../../constants/siteNavigation/siteNavigation';
import { Link } from '../LinkWrapper/LinkWrapper';
import { capitalizedFirstLetter } from '../../utils/stringUtils';
import { GitHUb } from '../Icons/SocialMediaIcons';
import { Demo } from '../Icons/Icons';

import './FooterLinks.css';

const ScrollLink = React.memo(({ to, text }: NavItem) => (
  <Link to={to} text={capitalizedFirstLetter(text)} className='footer__link' />
));

const ExternalLink = React.memo(({ to, text }: NavItem) => (
  <div role='button' className='footer__link' onClick={() => window.open(to, '_blank', 'noopener,noreferrer')} aria-label={text}>
    { to.includes('github.com') ? <GitHUb/> : <Demo />}
    {text}
  </div>
));

export default function FooterLinks({title, links, linkType}: NavSection) {

  const renderLinks = () => {
    return links.map((link) => {
      if (linkType === 'scroll') {
        return <ScrollLink key={link.to} {...link} />;
      } else {
        return <ExternalLink key={link.to} {...link} />;
      }
    });
  };

  return (
    <div className="footer-section">
      {title && <div className={`footer__title ${linkType !== 'scroll' ? 'footer__title--with-gap' : ''}`}>{title}</div>}
      <>{renderLinks()}</>
    </div>
  )
}
