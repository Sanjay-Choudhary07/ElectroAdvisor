import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Services.css';
import right from '../../assets/right_arrow.png';
import left from '../../assets/left.png';
import plus from '../../assets/plus_icon.png';

const Services = () => {
  const location = useLocation();
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const isActive = (path) => location.pathname === path;
  const handleAddQuestion = () => {
    setAdditionalQuestions([...additionalQuestions, { question: '', answer: '' }]);
  };

  const handleAdditionalInputChange = (index, field, value) => {
    const updatedQuestions = additionalQuestions.map((q, i) => {
      if (i === index) {
        return { ...q, [field]: value };
      }
      return q;
    });
    setAdditionalQuestions(updatedQuestions);
  };  

  const [answers, setAnswers] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
  });
  const handleInputChange = (event, answerKey) => {
    setAnswers({
      ...answers,
      [answerKey]: event.target.value,
    });
  };
  const handleAddAssets = () => {
    const areAllFieldsFilled = Object.values(answers).every((value) => value.trim() !== '');

    if (!areAllFieldsFilled) {
      alert('Please fill in every field before adding assets.');
    } else {
      alert('Successfully done!');
    }
  }
  return (
    <div className="main-container">
      <div className="left-column">
        <div className="navigation-arrow">
          <img src={left} alt="Left Arrow" />
        </div>
        <div className="tab-titles">
          <Link to="/Queries/Repair" className={`tab ${isActive('/Queries/Repair') ? 'active' : ''}`}>
            Repair Services
          </Link>
          <Link to="/Queries/Replacement" className={`tab ${isActive('/Queries/Replacement') ? 'active' : ''}`}>
            Replacement Policy
          </Link>
          <Link to="/Queries/Safety" className={`tab ${isActive('/Queries/Safety') ? 'active' : ''}`}>
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
          <input type="text" placeholder="Type the answer here" maxLength="75"
             value={answers.answer1}
             onChange={(event) => handleInputChange(event, 'answer1')} />
        </div>
        <div className="question-section">
          <div className="question">How do I prevent screen burn-in on OLED and plasma in Sony A80L television?</div>
           <div className="answer">Answer</div>
           <input type="text" placeholder="Type the answer here" 
             value={answers.answer2}
             onChange={(event) => handleInputChange(event, 'answer2')}/>
         </div>
        <div className="question-section">
          <div className="question">How do I factory reset Sony A80L television to its default settings?</div>
          <div className="answer">Answer</div>
          <input type="text" placeholder="Type the answer here"
             value={answers.answer3}
             onChange={(event) => handleInputChange(event, 'answer3')} />
        </div>
        <div className="question-section">
          <div className="question">Should I consult Sony A80L television manufacturer before seeking third-party repair?</div>
          <div className="answer">Answer</div>
          <input type="text" placeholder="Type the answer here"
             value={answers.answer4}
             onChange={(event) => handleInputChange(event, 'answer4')} />
        </div>
        <div className="question-section">
          <div className="question">How do I transfer settings and data from my old television to new Sony A80L television?</div>
          <div className="answer">Answer</div>
          <input type="text" placeholder="Type the answer here" 
            value={answers.answer5}
            onChange={(event) => handleInputChange(event, 'answer5')}/>
        </div>

        {additionalQuestions.map((q, index) => (
          <div key={index} className="question-section">
            <div className="question">
              <input 
                type="text"
                placeholder="Type the question here"
                value={q.question}
                onChange={(e) => handleAdditionalInputChange(index, 'question', e.target.value)}
              />
            </div>
            <div className="answer">Answer</div>
            <input
              type="text"
              placeholder="Type the answer here"
              value={q.answer}
              onChange={(e) => handleAdditionalInputChange(index, 'answer', e.target.value)}
            />
          </div>
        ))}
        <div className="add-more-section">
           <div className='plus'>
             <img src={plus} alt="Add Icon" />
             <button onClick={handleAddQuestion} className='add-more'>Add more questions</button>
           </div>
          <div className='add'>
            <button onClick={handleAddAssets}>Add Assets</button>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Services;