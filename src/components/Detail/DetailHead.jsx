import React from 'react';
import PropTypes from 'prop-types';

const DetailHead = ({ images, title, authors, categories, pages, product }) => (
   <div className="detail__header">
      <div className="detail__head-img">
         {images &&
            <img src={`${images.normal}`} alt={`Book cover of ${title}`}/> }
      </div>
      <div>
         <header>
            <h1 className="detail__head-title">{title}</h1>
            <h4 className="detail__head-author">{`by ${authors}`}</h4>
            {categories &&
               <span className="detail__head-cat">{categories} | </span> }
            {pages &&
             <span className="detail__head-pages">{`${pages} pages`}</span> }
         </header>
         {product &&
            <button className="detail__head-btn">
               <a href={product} target="_blank">Buy Now</a>
            </button> }
      </div>
   </div>
);

DetailHead.propTypes = {
   detail: PropTypes.object,
   product: PropTypes.string
}

export default DetailHead;