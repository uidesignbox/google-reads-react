import React from 'react';

const HeaderSearchContainer = (props) => {
   return (
      <div className="header-search__container">
         <form className="header-search__form" onSubmit={props.handleSubmit}>
            <label htmlFor="q"></label>
            <input type="text" name="q" placeholder="Search for a book title" onChange={props.handleUpdate}/>
            <button type="submit">Search</button>
         </form>
      </div>
   )
};

export default HeaderSearchContainer;