import React from 'react';
import PropTypes from 'prop-types';

const SearchHead = ({ query, count }) => (
   <div className="search__head">
      <div className="search__query">
         <strong>Your Search: </strong><span>{query}</span>
      </div>
      <div className="search__head-count">
         <span>Top Results: </span><strong>{count}</strong>
      </div>
   </div>
);

SearchHead.propTypes = {
   query: PropTypes.string,
   count: PropTypes.number,
};

export default SearchHead;