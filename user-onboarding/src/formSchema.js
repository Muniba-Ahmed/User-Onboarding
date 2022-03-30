import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("username is required!")
    .min(8, "Username must be at least two characters!"),
  password: yup.string().required("Password is required!"),
  email: yup
    .string()
    .email("Must be a valid email!")
    .required("Email is required")
    .min(6, "Password must be at least 6 characters long"),
  tos: yup.boolean(),
});

export default formSchema;
