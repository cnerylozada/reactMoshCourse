import React from "react";
import "./login.css";
import { Form, Formik } from "formik";
import Input from "../../_commons/input/input";
import { loginValidation } from "./loginValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usersService from "../../services/users.service";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      await usersService.login(values);
      const { state } = props.location;
      window.location = !!state ? state.from.pathname : "/";
    } catch (error) {
      const errors = error.response.data;
      return !!errors.length || !!errors.message
        ? toast.error("Invalid Credentials")
        : "";
    }
  };

  if (!!usersService.getCurrentUser()) return <Redirect to="/" />;
  return (
    <div className="col-sm-6">
      <ToastContainer />
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
              <Input label="Email" name="email" type="text" />
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
