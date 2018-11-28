import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
   return (
      <div className="error__message">
         { message ? message: 'There was an error, please try again.' }
      </div>
   );
};

ErrorMessage.propTypes = {
   message: PropTypes.string
};

export default ErrorMessage;