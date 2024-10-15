import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';

const About = () => {
  const MaintextDiv = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Make sure ScrollTrigger is registered

    const isMobile = window.innerWidth <= 768; // Detect mobile screens
    const scrubSpeed = isMobile ? 1 : 4; // Faster scrub for mobile
    const staggerSpeed = isMobile ? 0.02 : 0.05; // Faster stagger for mobile

    gsap.to('.textani', {
      scrollTrigger: {
        trigger: MaintextDiv.current,
        start: 'top 80%', // Start animation when this section enters the viewport
        end: 'bottom 20%',
        scrub: scrubSpeed, // Dynamic scrub speed based on screen size
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to('.textani', {
            opacity: (index) => Math.min(progress + index * 0.01, 1), // Gradually increase opacity
            stagger: staggerSpeed, // Dynamic stagger speed
          });
        },
      },
      opacity: 1, // End opacity
      stagger: staggerSpeed, // Dynamic stagger delay between each letter
    });
  }, []);

  return (
    <div ref={MaintextDiv} className="main-text-div">
      <div className="intro">About</div>
      <p className="text-block">
        {"I am a dynamic and versatile full stack developer with a deep passion for artificial intelligence and machine learning. Currently pursuing a Bachelor of Engineering in Computer Science & Engineering with a specialization in AI and ML at Chandigarh University, I have already amassed extensive hands-on experience in building innovative web applications.With expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and proficiency in Next.js, I have built and optimized various applications, from portfolios to interactive dashboards, for real-world use. My projects often feature creative and engaging UI/UX elements, using tools like Tailwind CSS, Three.js, and Framer Motion to create smooth animations and immersive user experiences. I have also explored NLP-based projects, implementing Seq2Seq models for language translation using TensorFlow.I work at Connecting All Circles (CAC Club) as a full stack developer showcasing my ability to handle high-responsibility roles. I have integrated advanced technologies, such as AI-powered drones, into ERP systems and consistently delivers tailored solutions for seamless project execution. From optimizing database interactions with MongoDB to designing intuitive front-end interfaces, I blends technical skills with creativity, ensuring that my solutions are both scalable and user-centric.Driven by curiosity and a commitment to innovation, I continues to explore emerging trends in AI, pushing the boundaries of what’s possible in web development, App Development and machine learning."
          .split('')
          .map((e, i) => {
            if (e === ' ') {
              return <span className="inline-space" key={i}>&nbsp;</span>;
            } else {
              return (
                <span className="inline-text textani" key={i} style={{ opacity: 0 }}>
                  {e}
                </span>
              );
            }
          })}
      </p>
    </div>
  );
};

export default About;
