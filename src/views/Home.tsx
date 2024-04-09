import React from 'react';
import photo from '../assets/img/img.png';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import { Link } from 'react-scroll';

import './Home.css';

export default function Home() {
  return (
    <section id='home' className='home'>
      <div className='home__text-container'>
        <h1>HI  THERE, <br/>
        I'M  <span>YANA</span></h1>
        <div className='home__text-item'>
          <h2>Frontend Developer </h2>
          <p>I'm a Frontend Developer with an expertise at JS, TS, React, Redux, CSS and HTML.</p>
        </div>
        <div className='home__text-item'>
          <h2>UI/UX Designer</h2>
          <p>I have 7 years of work experience as a designer, so I can make a Web App look good according to the best UI/UX standards.</p>
        </div>
        <SocialMedia />
        <div className='home__button-container'>
          <button onClick={() => window.open('https://www.linkedin.com/in/yana-glushychkina-5a5592263', '_blank', 'noopener,noreferrer')}>HIRE ME</button>
          <Link to="responsibilities" smooth={true} duration={500} offset={-72}><button className='secondary-button'>LEARN MORE</button></Link>
        </div>
        </div>
      <div className='home__img-container'>
        <img src={photo} alt="Yana." />
      </div>
    </section>
  )
}
