import React from 'react';
import PropTypes from 'prop-types';

const DetailMetaContent = ({ title, subtitle, publisher, date, language, product }) => (
   <div className="detail__meta-content">
      <h2 className="main__title">Additional Info</h2>
      <small>{(`${title}${subtitle ? ' - ' + subtitle : ''}`)}</small>
      <section className="meta__content-items">
         <div className="meta__item">
            <strong>Publisher: </strong><span>{publisher}</span>
         </div>
         <div className="meta__item">
            <strong>Published Date: </strong><span>{date}</span>
         </div>
         <div className="meta__item">
            <strong>Language: </strong><span>{language}</span>
         </div>
         <button className="detail__meta-cta">
            <a href={product} target="_blank">Buy Now</a>
         </button>
      </section>
   </div>
);

// DetailMetaContent.propTypes = {
//    detail: PropTypes.object,
//    product: PropTypes.string
// }

export default DetailMetaContent;