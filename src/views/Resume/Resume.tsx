import React from 'react';
import { expertise } from '../../constants/expertise';
import Expertise from './Expertise';

import './Resume.css'

export default function Resume() {
  return (
    <section id='resume' className='resume section-container'>
      <h1 className='section-heading'>RESUME</h1>
      <div className='section-description'><p>As a front-end developer with a Master's degree in software engineering, I bring a unique combination of technical expertise and creative vision to my projects. My background in computer science and hands-on experience in front-end development, UI/UX design, and marketing enable me to create compelling user experiences that meet both business goals and user needs. For a detailed overview of my qualifications and experience, please refer to my CV.</p></div>
      <div className='resume__expertise-options'>
        {expertise.map(field => (
          <Expertise
            key={field.name}
            name={field.name}
            description={field.description}
            image={field.image}
            />
        ))}
      </div>
      <button>DOWNLOAD CV</button>
    </section>
  )
}
