import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../utils/book_icon.svg';
import Overlay from '../Overlay';
import HeaderSearchContainer from './HeaderSearchContainer';

class Header extends Component {
   constructor() {
      super();
      this.state = {
         isSearchOpen: null,
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
      // Pass the query to search detail component route.
   }

   render() {
      return (
         <div className="header__container">
            {/* <FontAwesomeIcon icon="long-arrow-alt-left" className="back__icon" /> */}
            <img src={ Logo } alt="Web app logo" className="header__logo" />
            <FontAwesomeIcon icon="search" className="search__icon" onClick={this.toggleSearch} />
            {this.state.isSearchOpen &&
               <HeaderSearchContainer handleSubmit={this.handleSubmit} handleUpdate={this.handleUpdate} /> }
            {this.state.isSearchOpen &&
               <Overlay /> }
         </div>
      )
   }
};

export default Header;