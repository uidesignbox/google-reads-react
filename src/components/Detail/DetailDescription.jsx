import React from 'react';
import PropTypes from 'prop-types';

const DetailDescription = ({ description }) => (
   <article className="detail__description">
      <h2 className="main__title">Description</h2>
      <p className="detail__main-content">{description}</p>
   </article>
);

DetailDescription.propTypes = {
   description: PropTypes.string
};

export default DetailDescription;