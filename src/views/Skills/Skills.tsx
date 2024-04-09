import React from 'react';
import Skill from './Skill';
import { skills } from '../../constants/skills';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import './Skills.css';

export default function Skills() {
  return (
    <section id='skills' className='skills section-container'>
      <h1 className='section-heading'>SKILLS</h1>
      <div className='section-description'><p>My main working tools are TypeScript, JavaScript, React and Redux. But I'm absolute proficient with all technologies and Instruments mentioned in Frontend & Tools columns. For styling I prefer to use CSS and SASS along with Material UI. Though I’m a Frontend Developer, I have a basic knowledge of Backend technologies and have some experience in working with them.</p></div>
      <div className='skills__skills-options'>
      <ResponsiveMasonry columnsCountBreakPoints={{320: 1, 450: 2, 700: 3, 960: 4, 1200: 5}}>
        <Masonry gutter='8px'>
          {skills.map(field => (
            <Skill
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
