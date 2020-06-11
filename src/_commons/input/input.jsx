import React from 'react';

const Input = ({name, label, type, value, onChange}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className="form-control"
        name={name} value={value} onChange={onChange}/>
    </div>
  );
}

export default Input;