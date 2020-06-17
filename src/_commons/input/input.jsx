import React from 'react';
import { Field, ErrorMessage } from 'formik';
import InputErrorMessage from '../InputErrorMessage/inputErrorMessage';
import './input.css';

const Input = ({ name, label, type, placeholder }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field type={type} placeholder={placeholder}
        className="form-control" name={name} />
      <ErrorMessage name={name} component={InputErrorMessage} />
    </div>
  );
}

export default Input;