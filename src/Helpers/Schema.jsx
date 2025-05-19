import * as yup from "yup";

//for user registration form
export const registerSchema=yup.object({
    email:yup.string().required("Please enter email"),
    username:yup.string().required("Please enter username").min(2,"Minimum two letters required").max(8,"Maximum eight letters allowed"),
    password:yup.string().required("Please enter password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
})
//for user login form
export const loginSchema=yup.object({
    email:yup.string().required("Please enter email"),
    password:yup.string().required("Please enter password")
})