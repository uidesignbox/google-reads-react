import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ text, name, placeholder, autoComplete, handler, id }) => {
   return (
      <input id={id} type={text} name={name} autoComplete={autoComplete || "off"} placeholder={placeholder} onChange={handler}/>
   );
};

Input.propTypes = {
   text: PropTypes.string,
   name: PropTypes.string,
   placeholder: PropTypes.string,
   autoComplete: PropTypes.string,
   handler: PropTypes.func,
};

export default Input;