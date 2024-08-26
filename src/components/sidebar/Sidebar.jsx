import React from 'react';
import './Sidebar.css';
import logo from '../../assets/logo.png';
import square_icon from '../../assets/square_icon.png';
import rhombus from '../../assets/rhomb-outline.png';
import message from '../../assets/message.png';
import dimond from '../../assets/dimond.png';
import lock from '../../assets/lock.png';
import question_icon from '../../assets/question_icon.png';
import right from '../../assets/right.png';
import setting from '../../assets/setting.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="icons">
        <img src={square_icon} alt="Icon 1" />
        <img src={rhombus} alt="Icon 2" />
        <img src={message} alt="Icon 3" />
        <img src={dimond} alt="Icon 4" />
        <img src={lock} alt="Icon 5" />
        <img src={question_icon} alt="Icon 6" />
      </div>
      <div className="bottom-icons">
        <img className='right' src={right} alt="Icon 7" />
        <img src={setting} alt="Icon 8" />
      </div>
    </div>
  );
}

export default Sidebar;



