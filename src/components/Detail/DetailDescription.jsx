import React from 'react';
import PropTypes from 'prop-types';

const DetailDescription = ({ description }) => (
   <section className="detail__description">
      <h2 className="main__title">Description</h2>
      <p>{description}</p>
   </section>
);

DetailDescription.propTypes = {
   description: PropTypes.string
};

export default DetailDescription;