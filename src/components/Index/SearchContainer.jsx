import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom';
import IndexSearchForm from './IndexSearchForm';

class SearchContainer extends PureComponent {
   constructor() {
      super();
      this.state = { 
         isSubmitValid: null,
         query: ''
      };
      this.handleQuery = this.handleQuery.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();
      if (this.state.query.length > 1) {
         this.setState({ isSubmitValid: true });
         return;
      } 
      this.setState({ isSubmitValid: null })
   }

   handleQuery(event) {
      this.setState({ query: event.target.value })
   };

   render() {
      return (
         <div className="index__search-container">
            <FontAwesomeIcon icon="book-reader" className="icon" />
            <h2 className="title">Find your next read.</h2>
            <IndexSearchForm
               handler={this.handleQuery}
               handleSubmit={this.handleSubmit}
            />
            {this.state.isSubmitValid &&
               <Redirect to={{
                  pathname: `/search/${this.state.query}`,
                  state: { search: this.state.query }
               }} />
            }
         </div>
      );
   }
};

export default SearchContainer;