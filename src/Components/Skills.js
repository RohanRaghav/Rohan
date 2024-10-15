import React, { useState, useEffect } from 'react';

const SkillCircle = ({ text, additionalSkills }) => {
  const [hovered, setHovered] = useState(false);
  const [translateValue, setTranslateValue] = useState(120); // Default value for larger screens

  // Adjust translate value based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setTranslateValue(80); // Smaller translation for phones
      } else {
        setTranslateValue(120); // Larger translation for tablets and desktops
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize); // Update value on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
                transform: `rotate(${index * angleStep}deg) translate(${translateValue}px) rotate(-${index * angleStep}deg)`,
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
    { text: 'FrontEnd Development', additionalSkills: ['HTML', 'CSS','Javascript','TypeScript','React Js', 'Next Js','Three Js','Tailwind CSS','Git','Bootstrap'] },
    { text: 'Backend Development', additionalSkills: ['PHP','Python', 'MySQL', 'Node Js', 'Express Js','MongoDB','REST'] },
    { text: 'Android Development', additionalSkills: ['Kotlin', 'React Native', 'Java'] },
    { text: 'Machine Learning', additionalSkills: ['Python', 'NoSQL', 'TensorFlow', 'Microsoft Azure'] },
    { text: 'Content Creation', additionalSkills: ['Figma', 'Canva', 'Blender', 'UI/UX Design', 'PowerPoint'] },
    { text: 'Programming & Embedded Systems', additionalSkills: ['C', 'C++', 'IOT', 'Scratch'] },
    { text: 'Additional Skills', additionalSkills: ['Tally ERP','Office Automation','Research','Content Writing','Project Managing','Marketing'] },
    { text: 'Interpersonal Skills', additionalSkills: ['Team Leadership','Team Management','Time Management','Problem Solving','Critical Thinking','Conflict Management','Creativity'] }
  ];

  return (
    <div className='skills' id='Skills'>
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
