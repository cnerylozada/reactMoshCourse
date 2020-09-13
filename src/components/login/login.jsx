import React from "react";
import "./login.css";
import Input from "../../_commons/input/input";
import { Form, Formik } from "formik";
import { loginValidation } from "./loginValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usersService from "../../services/users.service";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      await usersService.login(values);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
