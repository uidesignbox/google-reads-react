import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Search/Input';

const HeaderSearchContainer = ({ handleSubmit, handleUpdate, open }) => {
   return (
      <div className={`header-search__container${open}`}>
         <form className="header-search__form" onSubmit={handleSubmit}>
            <label htmlFor="q" name="q" hidden></label>
            <Input 
               text={"text"}
               name={"q"}
               placeholder={"Search for a book title."}
               handler={handleUpdate}
            />
            <button type="submit" title="search for books">Search</button>
         </form>
      </div>
   )
};

HeaderSearchContainer.propTypes = {
   handleSubmit: PropTypes.func,
   handleUpdate: PropTypes.func,
   open: PropTypes.string,
};

export default HeaderSearchContainer;