import React from 'react';
import Skill from './Skill';
import { skills } from '../../constants/skills';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import './Skills.css';

export default function Skills() {
  return (
    <section id='skills' className='skills section-container'>
      <div className='heading-description-container'>
        <h1 className='section-heading'>SKILLS</h1>
        <div className='section-description'><p>I mainly use TypeScript, JavaScript, React, and Redux, although there's a list of technologies I'm proficient with down below. However if a project requires some tech beyond what's listed - it's easy for me to pick it up and I'm ready to do it.</p></div>
      </div>
      
      <div className='skills__skills-options'>
      <ResponsiveMasonry columnsCountBreakPoints={{320: 1, 450: 2, 700: 3, 960: 4, 1200: 5}}>
        <Masonry gutter='8px'>
          {skills.map(field => (
            <Skill
              key={field.name}
              name={field.name}
              description={field.description}
              image={field.image}
              />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      </div>
    </section>
  )
}
