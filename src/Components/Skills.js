import React, { useState } from 'react';

const SkillCircle = ({ text, additionalSkills }) => {
  const [hovered, setHovered] = useState(false);
  
  // Calculate angle between each small circle based on total number of sub-skills
  const angleStep = 360 / additionalSkills.length;

  return (
    <div 
      className="circle" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <span>{text}</span>
      {hovered && (
        <div className="surrounding-circles">
          {additionalSkills.map((skill, index) => (
            <div
              key={index}
              className="small-circle"
              style={{
                transform: `rotate(${index * angleStep}deg) translate(120px) rotate(-${index * angleStep}deg)`,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { text: 'Skill 1', additionalSkills: ['Sub-skill 1', 'Sub-skill 2'] }, // Example with 2 sub-skills
    { text: 'Skill 2', additionalSkills: ['Sub-skill 3', 'Sub-skill 4', 'Sub-skill 5', 'Sub-skill 6'] }, // Example with 4 sub-skills
    { text: 'Skill 3', additionalSkills: ['Sub-skill 7', 'Sub-skill 8', 'Sub-skill 9'] }, // Example with 3 sub-skills
    { text: 'Skill 4', additionalSkills: ['Sub-skill 10', 'Sub-skill 11', 'Sub-skill 12', 'Sub-skill 13', 'Sub-skill 14', 'Sub-skill 15'] } // Example with 6 sub-skills
  ];

  return (
    <div className='skills'>
    <div className='intro'>
        Skills
    </div>
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <SkillCircle 
          key={index} 
          text={skill.text} 
          additionalSkills={skill.additionalSkills} 
        />
      ))}
    </div>
    </div>
  );
};

export default Skills;
