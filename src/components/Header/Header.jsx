import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../utils/book_icon.svg';
import Overlay from '../Overlay';
import HeaderSearchContainer from './HeaderSearchContainer';

class Header extends Component {
   constructor() {
      super();
      this.state = {
         isSearchOpen: null,
         submit: null,
         query: null
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.toggleSearch = this.toggleSearch.bind(this);
   }

   componentDidMount() {
      document.addEventListener("keydown", this.toggleSearch, false)
   }

   toggleSearch(event) {
      // Add close state on key press of esc.
      if (event.type === 'keydown' && event.keyCode === 27) {
         this.setState({ isSearchOpen: null });
      }
      
      if (event.type !== 'keydown') {
         this.setState(prevState => ({
            isSearchOpen: !prevState.isSearchOpen
         }));
      }
   }

   handleUpdate(event) {
      this.setState({ 
         query: event.target.value
      });
   }

   handleSubmit(event) {
      event.preventDefault();
      if (this.state.query.length > 1) {
         this.setState({ submit: true });
      }
   }

   render() {
      return (
         <div className="header__container">
            {this.props.history &&
               <FontAwesomeIcon
                  icon="long-arrow-alt-left"
                  className="back__icon"
                  onClick={this.props.history.goBack}
               /> }
            
            <Link to={'/'} className="header__logo" title="Link back to homepage">
               <img src={ Logo } alt="Logo for web application" />
               <small>Google Book Reads</small>
            </Link>
            <FontAwesomeIcon
               icon="search"
               className="search__icon"
               onClick={this.toggleSearch}
            />
            
            <HeaderSearchContainer 
               handleSubmit={this.handleSubmit} 
               handleUpdate={this.handleUpdate}
               open={this.state.isSearchOpen ? ' active' : ''}
            />

            {this.state.isSearchOpen &&
               <Overlay /> }
               
            {this.state.submit &&
               <Redirect to={{
                  pathname: `/search/${this.state.query}`,
                  state: { search: this.state.query }
               }} /> }
         </div>
      )
   }
};

export default Header;