import React from 'react';
import { SkillsType } from '../../constants/skills';
import SkillItem from './SingleSkillItem';

import './Skill.css';

type SkillsProps = SkillsType;

export default function Skill({name, description, image}: SkillsProps) {
  return (
    <div className='skill'>
      {image && <img src={image} alt={image} />}
      <h3 className='item-heading'>{name}</h3>
      <div className='skill-list'>
        <SkillItem description={description} />
      </div>
    </div>
  )
}
