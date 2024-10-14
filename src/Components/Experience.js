import React from 'react';

// Example data for images, titles, and descriptions
const experiences = [
  {
    src: '/Cac_logo.png', // Replace with real image URLs
    title: 'Full Stack Developer',
    description: 'Connecting all circles:(2024-present)',
  },
  {
    src: '/aittraids.jpg', // Replace with real image URLs
    title: 'Full Stack Developer',
    description: 'AIT Traids:(2024-present)',
  },
  {
    src: 'https://tse4.mm.bing.net/th?id=OIP.us7piQEjmoUT4T6WSU7LQwHaFU&pid=Api&P=0&h=220', // Replace with real image URLs
    title: 'Student Member',
    description: 'Art of living:(2022-present)',
  },
  {
    src: 'https://1000logos.net/wp-content/uploads/2019/03/IEEE-emblem.jpg', // Replace with real image URLs
    title: 'Student Member',
    description: 'IEEE:(2022-2023)',
  },
];

const Experience = () => {
  return (
    <div className='experiance'>
      <div className='intro'>Experience</div>
      <div className="slider-container">
        {/* Slider: Left to Right */}
        <div className="slider left-to-right">
          <div className="slider-track">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <img src={exp.src} alt={`image-${index}`} className="slider-image" />
                <div className="experience-details">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
