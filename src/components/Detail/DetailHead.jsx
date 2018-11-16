import React from 'react';
import PropTypes from 'prop-types';

const DetailHead = ({ images, title, authors, categories, pages, product }) => (
   <div className="detail__header">
      <div className="detail__head-img">
         {images &&
            <img src={`${images.normal}`} alt={`Book cover of ${title}`}/> }
      </div>
         <header>
            <h1 className="detail__head-title">{title}</h1>
            <h4 className="detail__head-author">{`by ${authors[0].name}`}</h4>
            {categories &&
               <span className="detail__head-cat">{categories[0].name} | </span> }
            {pages &&
             <span className="detail__head-pages">{`${pages} pages`}</span> }
            {product &&
               <button className="detail__head-btn">
                  <a href={product} target="_blank">Buy Now</a>
               </button> }
         </header>
   </div>
);

// DetailHead.propTypes = {
//    images: PropTypes.string,
//    title: PropTypes.string,
//    authors: PropTypes.string,
//    categories: PropTypes.string,
//    pages: PropTypes.string,
//    product: PropTypes.string
// };

export default DetailHead;