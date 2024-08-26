import React from 'react';
import './ProductDetails.css';
import percentage from '../../assets/percentage.png';
import vertical from '../../assets/vertical_line.png';
import japan from '../../assets/japan.png'
const ProductDetails = () => {
  return (
    <div className='product-details-container'>
      <div className="product-details-box">
        <div className="detail-item">
          <span className="label">Catalog</span>
          <span className="value">Television</span>
        </div>
        <div className='ver'>
          <img src={vertical} alt='verticle line' className='verticle' />
        </div>
        <div className="detail-item">
          <span className="label">Sub Catalog</span>
          <span className="value">QLED</span>
        </div>
        <div className='ver'>
          <img src={vertical} alt='verticle line' className='verticle' />
        </div>
        <div className="detail-item">
          <span className="label">Brand Name</span>
          <span className="value">Sony</span>
        </div>
        <div className='ver'>
          <img src={vertical} alt='verticle line' className='verticle' />
        </div>
        <div className="detail-item">
          <span className="label">Model No</span>
          <span className="value">A80L Series</span>
        </div>
        <div className='ver'>
          <img src={vertical} alt='verticle line' className='verticle' />
        </div>
        <div className="detail-item">
          <span className="label">Device Category</span>
          <span className="value">Android TV</span>
        </div>
        <div className='ver'>
          <img src={vertical} alt='verticle line' className='verticle' />
        </div>
        <div className="detail-item">
          <span className="label">Manufacturer</span>
          <span className="value">Sony Corp.</span>
        </div>
        <div className='ver'>
          <img src={vertical} alt='verticle line' className='verticle' />
        </div>
        <div className="detail-item">
          <span className="label">Manufactured In</span>
          <div className='japan'>
            <img src={japan} alt='japan' className='japan-image' />
            <span className="value">Japan</span>
          </div>
        </div>
        <div className='ver'>
          <img src={vertical} alt='verticle line' className='verticle' />
        </div>
        <div className="detail-item">
          <span className="label">Product Capabilities</span>
          <img src={percentage} className='percentage' />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;