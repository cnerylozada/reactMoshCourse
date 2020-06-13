import React from 'react';

const Input = ({ name, label, type, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className="form-control"
        name={name} value={value} onChange={onChange} />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default Input;