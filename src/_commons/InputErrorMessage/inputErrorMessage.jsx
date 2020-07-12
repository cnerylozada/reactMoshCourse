import React from 'react';
import './inputErrorMessage.css';

const InputErrorMessage = (props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.children}
    </div>
  );
}

export default InputErrorMessage;