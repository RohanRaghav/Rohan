import React from 'react';
import FlipPage from 'react-flip-page';
import Cover from './Cover';
import Introduction from './Introduction';
import Team from './Team';
import TeamPart from './TeamPart';
import DiaryEvent from './DiaryEvent';
import Greet from './Greet';

const pages = [
  { content: <div><Cover /></div> }, // Cover Page
  { content: <div style={{border:'2px solid black',width:'85%',height:'90%'}}><Introduction /></div> },
  { content: <div style={{border:'2px solid black',width:'85%',height:'90%'}}><Team /></div> },
  { content: <div style={{border:'2px solid black',width:'85%',height:'90%'}}><TeamPart /></div> },
  { content: <div style={{border:'2px solid black',width:'85%',height:'90%'}}><DiaryEvent /></div> },
  { content: <div style={{border:'2px solid black',width:'85%',height:'90%'}}><Greet /></div> },
  { content: <div style={{border:'2px solid black',width:'85%',height:'90%'}}>Continue.....</div> }, // Last page
];
const Diary = () => {
  return (
    <div className="diary-container" id='Diary'>
      <div className='intro'>Professional Diary</div>
      <FlipPage
        className="book"
        orientation="horizontal"
        showSwipeHint
        animationDuration={800}
        uncutPages // Enables two-page spreads
        flipOnTouch
      >
        {pages.map((page, index) => (
          <article key={index} className="page-content">
            {page.content}
          </article>
        ))}
      </FlipPage>
    </div>
  );
};

export default Diary;
