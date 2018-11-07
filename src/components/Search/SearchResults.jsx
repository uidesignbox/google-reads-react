import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem';

const SearchResults = (props) => (
   <div className="search__results-container">
      {props.results.map((item, i) => 
         <SearchItem key={i} detail={item.volume_info} />
      )}
   </div>
);

SearchResults.propTypes = {
   results: PropTypes.array
};

export default SearchResults;