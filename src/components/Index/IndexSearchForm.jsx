import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../Search/Input';

class IndexSearchForm extends PureComponent {
   render() {
      return (
         <form className="index__search-form" onSubmit={this.props.handleSubmit}>
            <button type="submit" title="search for book by title" className="search__button" onClick={this.props.handleSubmit}>
               <FontAwesomeIcon icon="search" />
            </button>
            <label htmlFor="footer-search">
               <Input
                  id={"footer-search"}
                  text={"text"}
                  name={"footer-search"}
                  placeholder={"Enter a book title."}
                  handler={this.props.handler}
               />
            </label>
         </form>
      );
   }
}

IndexSearchForm.propTypes = {
   handler: PropTypes.func,
   handleSubmit: PropTypes.func,
};

export default IndexSearchForm;