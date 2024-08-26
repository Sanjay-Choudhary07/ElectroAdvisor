import React from 'react';
import './Tabs.css';

const Tabs = () => {
  return (
    <div className="tabs-container">
      <div className="tabb">
        <div className="tab-item gallary">Gallery</div>
        <div className="tab-item">Specifications</div>
        <div className="tab-item">Key Notes</div>
        <div className="tab-item">Company Profile</div>
        <div className="tab-item">Performance</div>
        <div className="tab-item">Experience</div>
        <div className="tab-item">Review</div>
        <div className="tab-item">Safety</div>
        <div className="tab-item">Queries</div>
        <div className="tab-item active pre-purchase">Pre-Purchase</div>
        <div className="tab-item  post-purchase">Post-Purchase</div>
      </div>
    </div>
  );
};
export default Tabs;