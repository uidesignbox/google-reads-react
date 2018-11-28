import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailMetaContent = ({ title, subtitle, publisher, date, language, product }) => (
   <section className="detail__meta-content">
      <h2 className="main__title">Additional Info</h2>
      <small>{(`${title}${subtitle ? ' - ' + subtitle : ''}`)}</small>
      <aside className="meta__content-items">
         <div className="meta__item flex__item">
            <div>
               <strong><FontAwesomeIcon icon="book" /> Publisher: </strong>
            </div>
            <div>
               <span>{publisher}</span>
            </div>
         </div>
         <div className="meta__item flex__item">
            <div>
               <strong><FontAwesomeIcon icon="calendar" /> Published Date: </strong>
            </div>
            <div>
               <span>{date}</span>
            </div>
         </div>
         <div className="meta__item flex__item">
            <div>
               <strong><FontAwesomeIcon icon="language" /> Language: </strong>
            </div>
            <div>
               <span>{language}</span>
            </div>
         </div>
         {product && 
         <a href={product} target="_blank">
            <button className="detail__meta-cta">Buy Now</button>
         </a>}
      </aside>
   </section>
);

DetailMetaContent.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
   publisher: PropTypes.string,
   date: PropTypes.string,
   language: PropTypes.string,
   product: PropTypes.string
};

export default DetailMetaContent;