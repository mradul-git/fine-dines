import * as Yup from "yup";
const validationSchema = Yup.object().shape({
    email:Yup.string().
    required("Email is required")
    .email("Invalid email format"),

    password:Yup.string().
    required("password is required")
    .min(6,"password must be 6 char long"),
});

export default validationSchema;