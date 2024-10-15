import React, { useEffect, useState, useRef } from 'react';

const Projects = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // For managing the selected card
  const cardRowRef = useRef(null);
  const backgroundTextRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false); // To detect mobile devices

  // Cards data
  const cards = [
    {
      image: '/Cac.png',
      title: 'Connecting All Circles (CAC) Club Website',
      content: 'The CAC Club Website is a full-stack web application designed to serve as the digital presence of the Connecting All Circles (CAC) Club. This project aims to showcase the club’s events, projects, and collaborations, providing an interactive and user-friendly platform for students and tech enthusiasts to connect and contribute.',
    },
    {
      image: '/Tekathon.png',
      title: 'Tekathon 3.0 website',
      content: "The Teckathon 3.0 website was developed as the official platform for the third edition of the Teckathon event, a premier tech competition designed to foster innovation and collaboration among students and developers. This project aimed to provide participants with a seamless experience from registration to event updates and project submissions.",
    },
    {
      image: '/Human.png',
      title: 'Human Machine collaboration on brain tumor diagnosis',
      content: 'Spearheaded the development of an advanced Brain Tumor Diagnosis Machine, integrating cutting-edge machine learning algorithms to enhance the accuracy of brain tumor diagnoses through medical imaging.',
    },
    {
      image: '/stock.jpeg',
      title: 'StockPred',
      content: 'Initiated a pioneering project focused on stock market predictions and pattern recognition using the powerful Gated Recurrent Unit (GRU) machine learning algorithm. This cutting-edge solution aims to provide accurate forecasts and insights into market trends, enabling informed investment decisions.',
    },
    {
      image: '/AppSs.png',
      title: 'Portfolio App',
      content: 'Built a fully functional portfolio app using React Native! 📱✨ This app showcases my work, skills, and projects in an intuitive and user-friendly interface, providing a seamless experience across both iOS and Android platforms.',
    },
    {
      image: '/Port.png',
      title: 'Portfolio Website',
      content: 'Built a fully functional portfolio website designed to effectively showcase my work, skills, and projects in a visually appealing and intuitive manner. This website serves as a digital representation of my professional identity, making it easy for potential employers, clients, and collaborators to explore my expertise and past work.',
    },
    {
      image: '/yogax.jpeg',
      title: 'YogaInstructor',
      content: 'Developed an innovative website designed to guide yoga enthusiasts in achieving proper postures using advanced motion detection and machine learning technologies. This interactive platform enhances the yoga experience by providing real-time feedback and personalized guidance.',
    },
    {
      image: '/Boot.png',
      title: 'Bootcamp Website',
      content: 'Developed two comprehensive websites for bootcamps organized by our club, featuring separate portals for administrators and students. I successfully designed and implemented both the frontend and backend of the applications, ensuring a seamless user experience. The admin panel allows for effective management of quizzes and assessments, while the student portal provides users with easy access to participate in quizzes and submit their assessments. ',
    },
    {
      image: '/IOT.jpg',
      title: 'Rain Alarm',
      content: 'The Rain Alarm project is an IoT solution designed to monitor and detect rainfall in real time. This project utilizes various sensors, microcontrollers, and cloud technologies to provide timely alerts and ensure that users are informed about weather changes in their vicinity. ',
    },
  ];

  // Detect screen size for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screen is <= 768px
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll event listener to toggle blur effect
  useEffect(() => {
    const handleScroll = () => {
      const cardRow = cardRowRef.current;
      const backgroundText = backgroundTextRef.current;

      if (cardRow && backgroundText) {
        const cardRowRect = cardRow.getBoundingClientRect();
        const backgroundTextRect = backgroundText.getBoundingClientRect();

        // Check if the card row is close to the background text
        if (cardRowRect.top <= backgroundTextRect.bottom) {
          setIsBlurred(true);
        } else {
          setIsBlurred(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle card click and open the modal
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  // Styles for the card container and cards
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardStyle = {
    width: isMobile ? '90%' : '30%', // Full width on mobile, 30% on larger screens
    margin: '10px',
    boxSizing: 'border-box',
    cursor: 'pointer',
  };

  return (
    <div className="cards-containers" id='Projects'>
      {/* Background text with dynamic blur effect */}
      <div
        ref={backgroundTextRef}
        className={`background-texts ${isBlurred ? 'blurred' : ''}`}
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          left: '50%',
          transform: isMobile ? 'none' : 'translateX(-50%)', // Remove transform on mobile
          transition: 'filter 0.3s ease',
          filter: isBlurred ? 'blur(8px)' : 'none', // Apply blur effect dynamically
        }}
      >
        Projects
      </div>

      {/* Cards */}
      <div className="card-row" ref={cardRowRef} style={cardContainerStyle}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="cardsss"
            style={cardStyle}
            onClick={() => handleCardClick(card)} // Handle card click
          >
            <img src={card.image} alt={card.title} className="cards-images" />
            <div className="cards-contents">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed card view */}
      {selectedCard && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '80%',
              overflowY:'auto',
              maxWidth: '600px',
              textAlign: 'center',
              position: 'relative', // Allow the close button to be positioned
            }}
          >
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
            >
              X
            </button>
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
