import React from 'react';

const ListItem = (props) => (
   <li className="carousel__item">
      <img src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" alt="Featured cover of book" className="carousel__cover"/>
      <div className="carousel-meta__content">
         <h4 className="carousel__item--title">Title of Book</h4>
         <span className="carousel__item--author">author</span>
      </div>
   </li>
);

export default ListItem;