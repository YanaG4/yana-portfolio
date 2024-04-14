import React from 'react';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import { projects } from '../../constants/responsibilities/projects';
import { benefits } from '../../constants/responsibilities/benefits';
import Project from './Project';
import Benefit from './Benefit';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import './Responsibilities.css'

export default function Responsibilities() {
  return (
    <section id='responsibilities' className='responsibilities section-container'>
      <h1 className='section-heading'>RESPONSIBILITIES</h1>
      <h2>Do you want me to...</h2>
      <div className='project-types'>
        {projects.map(project => (
          <Project key={project.description} description={project.description} image={project.image} name={project.name} />
        ))}
      </div>
      <h2>No problem! For the chosen task</h2>
      <h1 className='section-heading'>I ENSURE</h1>
      <ResponsiveMasonry columnsCountBreakPoints={{300: 1,800: 2}}>
        <Masonry gutter='24px'> 
          {benefits.map(benefit => (
            <Benefit key={benefit.name} name={benefit.name} description={benefit.description} image={benefit.image} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className='section-description'><p><span>Global Availability: </span>Although I'm located in Estonia, I offer my services globally. As a contractor, I'm ready to adapt to your time zone and work requirements, offering both part-time and full-time collaboration. Don't hesitate — let's start making your project a reality today!</p></div>
      <div className='responsibilities__sm'><SocialMedia /></div>
    </section>
  )
}
