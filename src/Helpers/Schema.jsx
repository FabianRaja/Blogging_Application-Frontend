import * as yup from "yup";

//for user registration form
export const registerSchema=yup.object({
    email:yup.string().required("Please enter email"),
    name:yup.string().required("Please enter username").min(2,"Minimum two letters required").max(8,"Maximum eight letters allowed"),
    password:yup.string().required("Please enter password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
})
//for user login form
export const loginSchema=yup.object({
    email:yup.string().required("Please enter email"),
    password:yup.string().required("Please enter password")
})

//for create blog form
export const createBlogSchema=yup.object({
    title:yup.string().required("Please enter email"),
    category:yup.string().required("Please enter password"),
    content:yup.string().required("Please enter content"),
    image:yup.string()
})