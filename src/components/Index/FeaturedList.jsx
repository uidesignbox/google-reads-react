import React, { Component } from 'react';
import ListItem from './FeaturedListItem';

class FeaturedList extends Component {
   render() {
      const Title = () => (
         <h2 className="carousel__title">New Books List</h2>
      );
      return (
         <div className="carousel__book-container">
            <Title />
            <ul className="carousel__book-list">
               <ListItem />
               <ListItem />
            </ul>
         </div>
      )
   }
};

export default FeaturedList;