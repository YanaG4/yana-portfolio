import React from 'react';
import { Link as RSLink } from 'react-scroll';

const HEADER_HEIGHT = 72 + 2; //additional offset for more precise spying

interface LinkProps {
  to: string;
  text: string;
  className?: string;
  activeClass?: string;
}

export function Link({to, text, className, activeClass}: LinkProps) {
  return (
    <RSLink
      to={to}
      smooth={true}
      duration={500}
      offset={-HEADER_HEIGHT}
      spy={true}
      className={className}
      activeClass={activeClass}
    >
      {text}
    </RSLink>
  )
}
