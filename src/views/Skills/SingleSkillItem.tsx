import React from 'react';
import { SkillsType, isSkillImportant } from '../../constants/skills';
import { Star } from '../../components/Icons/StarIcons';

type SkillItemProps = Pick<SkillsType, 'description'>;

export default function SkillItem({description}: SkillItemProps) {
  return (
    <ul className='skill-items'>
      {description.map(skill => (
        <li className={`${isSkillImportant(skill) ? 'skill-item--main' : ''}`}>
          {isSkillImportant(skill) && <Star />}
          {skill}
        </li>
      ))}
    </ul>
  )
}
