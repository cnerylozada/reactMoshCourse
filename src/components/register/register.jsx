import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../_commons/input/input";
import usersService from "../../services/users.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(7, "Password length must be at least 7 chars long"),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await usersService.save({
        email,
        password,
      });
      window.location = "/";
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <div className="col-sm-6">
      <ToastContainer />
      <h4 className="display-4">Register</h4>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {(formik) => {
          return (
            <Form>
              <Input label="Email" name="email" type="text" />
              <Input label="Password" name="password" type="password" />

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

export default RegisterForm;
