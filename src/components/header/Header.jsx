import React from 'react';
import './Header.css';
import left from '../../assets/left_arrow.png';
import notification from '../../assets/notification.png';
import ellipse from '../../assets/ellipse.png';
import vector from '../../assets/vector.png';
function Header() {
  return (
      <header className="header">
        <div className="header-left">
          <img src={left} alt="Back Arrow" className="icon arrow" />
          <span className="title">Product Information</span>
        </div>
        <div className="header-right">
          <div className="date">08 February, Thursday</div>
          <div>
            <img src={notification} alt="Notification" className="icon notification" />
          </div>
          <div className='user'>
            <div className="username">Pia Yadav
            </div>
            <div className='expert'>Expert
            </div>
          </div>
          <div className='ellip'>
            <img src={ellipse} alt='Ellipse icon' className='ellipse' />
          </div>
          <div className='vector'>
            <img src={vector} alt="Vector Icon" className="icon vector" />
          </div>
        </div>
      </header>
  );
}

export default Header;
