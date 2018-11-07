import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchItem = (props) => (
   <article className="search__result-item">
      <Link to={{
         pathname: `/book/${props.detail.title.toLowerCase()}`,
         state: {
            ...props,
            isFromSearch: true
         }
      }}>
         <div className="flex__container">
            <div className="search__result-img">
               {props.detail.images &&
                  <img src={props.detail.images.small} alt={`Book cover of ${props.detail.title}`}/> }
            </div>
            <div className="search__result-content">
               <h2 className="search__result-title">{props.detail.title}</h2>
               <h4 className="search__result-author">{props.detail.authors}</h4>
               <span className="search__result-date">{props.detail.published_date} <FontAwesomeIcon icon="clock" className="icon" /></span>
            </div>
         </div>
      </Link>
   </article>
);

SearchItem.propTypes = {
   detail: PropTypes.object
};

export default SearchItem;