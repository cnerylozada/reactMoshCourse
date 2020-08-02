import * as Yup from "yup";

export const loginValidation = Yup.object({
  username: Yup.string()
    .min(5, "Username must has at least 5 chars")
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
});
