import React from "react";
import { ErrorMessage, Field } from "formik";
import InputErrorMessage from "../InputErrorMessage/inputErrorMessage";

const Select = ({ label, name, options }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field as="select" className="form-control" name={name}>
        {options.map((_) => {
          return (
            <option key={_._id} value={_._id === "000" ? "" : _._id}>
              {_.name}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={InputErrorMessage} />
    </div>
  );
};

export default Select;
