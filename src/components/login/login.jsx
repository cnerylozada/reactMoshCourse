import React from "react";
import "./login.css";
import Input from "../../_commons/input/input";
import { Form, Formik } from "formik";
import { loginValidation } from "./loginValidation";

const Login = () => {
  const initialValues = {
    username: "cnerylozada",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="col-sm-6">
      <h4 className="display-4">Login</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidation}
        onSubmit={onSubmit}
        validateOnMount
      >
        {(formik) => {
          return (
            <Form>
              <Input label="Username" name="username" type="text" />
              <Input
                label="Password"
                placeholder="Enter a password"
                name="password"
                type="password"
              />
              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn btn-primary"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
