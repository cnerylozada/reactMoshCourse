import React from "react";

const Select = () => {
  return (
    <div className="form-group">
      <label>Options</label>
      <Field as="select" className="form-control" name="options">
        {this.dropdownOptions.map((_) => {
          return (
            <option key={_._id} value={_._id}>
              {_.name}
            </option>
          );
        })}
      </Field>
    </div>
  );
};

export default Select;
