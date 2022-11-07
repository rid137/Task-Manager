import PropTypes from 'prop-types';

import React from 'react';

const Button = ({text, color, showTaskForm}) => {
  return (
    <>
      <button className='btn' style={{backgroundColor: color}} onClick={showTaskForm}>{text}</button>
    </>
  );
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button;
