import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchItem = ({ detail, title, images, authors, published_date }) => (
   <article className="search__result-item">
      <Link to={{
         pathname: `/book/${title.toLowerCase()}`,
         state: {
            detail,
            isFromSearch: true
         }
      }}>
         <div className="flex__container">
            <div className="search__result-img">
               {images &&
                  <img src={images.small} alt={`Book cover of ${title}`}/> }
            </div>
            <div className="search__result-content">
               <h2 className="search__result-title">{title}</h2>
               {authors &&
                  authors.map((item, i) => <span key={i} className="search__result-author">{`${item.name} `}</span>) }
               <aside className="search__result-date">
                  <span>{published_date}</span>
                  <FontAwesomeIcon icon="clock" className="icon" />
               </aside>
            </div>
         </div>
      </Link>
   </article>
);

// SearchItem.propTypes = {
   
// };

export default SearchItem;