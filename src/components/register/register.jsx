import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../_commons/input/input';

const RegisterForm = (props) => {

  const initialValues = {
    username: '',
    password: '',
    name: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    name: Yup.string().required('Name is required'),
  })

  const onSubmit = values => {
    console.log(values);
  }

  return (
    <div className="col-sm-6">
      <h4 className="display-4">Register</h4>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <Input label='Username' name='username' type='text' />
          <Input label='Password' name='password' type='password' />
          <Input label='Name' name='name' type='text' />
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm;