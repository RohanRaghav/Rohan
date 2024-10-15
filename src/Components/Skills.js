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
    { text: 'FrontEnd Development', additionalSkills: ['HTML', 'CSS','Javascript','TypeScript','React Js', 'Next Js','Three Js','Tailwind CSS','Git','Bootstrap'] }, // Example with 2 sub-skills
    { text: 'Backend Development', additionalSkills: ['PHP','Python', 'MySQL', 'Node Js', 'Express Js','MongoDB','REST'] }, // Example with 4 sub-skills
    { text: 'Android Development', additionalSkills: ['Kotlin', 'React Native', 'Java'] }, // Example with 3 sub-skills
    { text: 'Machine Learning', additionalSkills: ['Python', 'NoSQL', 'TensorFlow', 'Microsoft Azure'] }, // Example with 6 sub-skills
    { text: 'Content Creation', additionalSkills: ['Figma', 'Canva', 'Blender', 'UI/UX Design', 'PowerPoint'] }, // Example with 6 sub-skills
    { text: 'Programming & Embedded Systems', additionalSkills: ['C', 'C++', 'IOT', 'Scratch'] }, // Example with 6 sub-skills
    { text: 'Additional Skills', additionalSkills: ['Tally ERP','Office Automation','Research','Content Writing','Project Managing','Marketing'] }, // Example with 6 sub-skills
    { text: 'Interpersonal Skills', additionalSkills: ['Team Leadership','Team Management','Time Management','Problem Solving','Critical Thinking','Conflict Management','Creativity'] } // Example with 6 sub-skills
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
