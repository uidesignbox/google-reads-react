import React from 'react';
import PropTypes from 'prop-types';

const SearchHead = (props) => (
   <div className="search__head">
      <div className="search__query">
         <strong>Your Search: </strong><span>{props.query}</span>
      </div>
      <div className="search__head-count">
         <span>Results: </span><strong>{props.count}</strong>
      </div>
   </div>
);

SearchHead.propTypes = {
   query: PropTypes.string
};

export default SearchHead;