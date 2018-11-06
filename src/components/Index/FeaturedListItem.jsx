import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = (props) => (
   <li className="carousel__item">
      <Link to={{
         pathname: `/book/${props.detail.title.toLowerCase()}`,
         state: { ...props }
      }}>
         <img src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" alt="Featured cover of book" className="carousel__cover"/>
         <div className="carousel-meta__content">
            <h4 className="carousel__item--title">{props.detail.title}</h4>
            <span className="carousel__item--author">{props.detail.contributor}</span>
         </div>
      </Link>
   </li>
);

ListItem.propTypes = {
   title: PropTypes.string,
   contributor: PropTypes.string
}

export default ListItem;