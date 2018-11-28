import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ title, contributor, images, detail, productUrl }) => (
   <li className="carousel__item">
      <Link to={{
         pathname: `/book/${title.toLowerCase()}`,
         state: { detail, productUrl }
      }}>
         {images &&
            <img src={images.small} alt={`Book cover for ${title}`} className="carousel__cover"/> }
         <div className="carousel-meta__content">
            <h4 className="carousel__item--title">{title}</h4>
            <span className="carousel__item--author">{contributor}</span>
         </div>
      </Link>
   </li>
);

ListItem.propTypes = {
   title: PropTypes.string,
   contributor: PropTypes.string,
   images: PropTypes.object,
   detail: PropTypes.object,
}

export default ListItem;