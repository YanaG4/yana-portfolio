import React from 'react';
import { SkillsType } from '../../constants/skills';

type SkillItemProps = Pick<SkillsType, 'description'>;;

export default function SkillItem({description}: SkillItemProps) {
  return (
    <ul className='skill-item'>
      {description.map(skill => (
        <li>{skill}</li>
      ))}
    </ul>
  )
}
