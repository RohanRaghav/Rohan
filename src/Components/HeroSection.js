import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const posts = ['Full Stack Developer', 'Machine Learning Enthusiast', 'App Developer', 'Graphic Designer']; // List of posts
  const [currentPost, setCurrentPost] = useState(''); // Current text being typed
  const [isDeleting, setIsDeleting] = useState(false); // Deleting state
  const [loopNum, setLoopNum] = useState(0); // Current index in posts
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % posts.length; // Loop through the posts array
      const fullText = posts[i]; // Get the current post text

      // Simulate typing and deleting
      setCurrentPost((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      // Speed adjustment for typing and deleting
      if (!isDeleting && currentPost === fullText) {
        setTimeout(() => setIsDeleting(true), 5000); // Pause for 5 seconds before starting to delete
      } else if (isDeleting && currentPost === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to the next post
      }

      setTypingSpeed(isDeleting ? 100 : 150); // Adjust speed when deleting
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [currentPost, isDeleting, loopNum, typingSpeed, posts]);

  return (
    <div className='rohan' id='Home'>
      <div className='intro'>
        Hello! I am<br />Rohan Raghav<br />
        I am a<br />
        <span className="typing">{currentPost}</span> {/* Cursor for typing effect */}
      </div>
      <div className='myimage'>
        <img
          src='https://media.licdn.com/dms/image/v2/D4D03AQGzhw2CVsHJkQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668431981368?e=1734566400&v=beta&t=7X9Wlj30T6SDFYeG3fgRjhNvxA373lGWOrTbgIjRPsY'
          alt='my-image'
          className='image'
        />
      </div>
    </div>
  );
};

export default HeroSection;
