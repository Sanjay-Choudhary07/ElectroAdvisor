import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Services.css';
import right from '../../assets/right_arrow.png';
import left from '../../assets/left.png';
import plus from '../../assets/plus_icon.png';

const Services = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="main-container">
      <div className="left-column">
        <div className="navigation-arrow">
          <img src={left} alt="Left Arrow" />
        </div>
        <div className="tab-titles">
          <Link to="/queries/repair" className={`tab ${isActive('/queries/repair') ? 'active' : ''}`}>
            Repair Services
          </Link>
          <Link to="/queries/replacement" className={`tab ${isActive('/queries/replacement') ? 'active' : ''}`}>
            Replacement Policy
          </Link>
          <Link to="/queries/safety" className={`tab ${isActive('/queries/safety') ? 'active' : ''}`}>
            Safety & Energy Efficiency
          </Link>
        </div>
        <div className="iconn">
          <img src={right} alt="Icon" className='ico' />
        </div>
      </div>
      <div className="right-column">
        <div className="question-section">
          <div className="question">How do I update Sony A80L television's firmware to fix issues?</div>
          <div className="answer">Answer</div>
          <input type="text" placeholder="Type the answer here" maxLength="75" />
        </div>
        <div className="question-section">
          <div className="question">How do I prevent screen burn-in on OLED and plasma in Sony A80L television?</div>
           <div className="answer">Answer</div>
           <input type="text" placeholder="Type the answer here" />
         </div>
        <div className="question-section">
          <div className="question">How do I factory reset Sony A80L television to its default settings?</div>
          <div className="answer">Answer</div>
          <input type="text" placeholder="Type the answer here" />
        </div>
        <div className="question-section">
          <div className="question">Should I consult Sony A80L television manufacturer before seeking third-party repair?</div>
          <div className="answer">Answer</div>
          <input type="text" placeholder="Type the answer here" />
        </div>
        <div className="question-section">
          <div className="question">How do I transfer settings and data from my old television to new Sony A80L television?</div>
          <div className="answer">Answer</div>
          <input type="text" placeholder="Type the answer here" />
        </div>
        <div className="add-more-section">
           <div className='plus'>
             <img src={plus} alt="Add Icon" />
             <span className='add-more'>Add more questions</span>
           </div>
          <div className='add'>
            <button>Add Assets</button>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Services;