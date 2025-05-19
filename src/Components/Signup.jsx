import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { registerSchema } from "../Helpers/Schema";
import { registerUser } from "../Helpers/Helper";

export default function Signup(){

    var handleReset = (values, formProps) => {
    return window.confirm('Reset?'); // still resets after you Cancel :(
};

    //required states is imported using useContext
    const {result,setResult,loading,setLoading,setAuth}=useContext(AppCtx);
    //formik is used for register user form and validation schema as registerSchema
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:"",
            name:"",
            password:""
        },
        validationSchema:registerSchema,
        onSubmit:(object)=>{
            setLoading("on");
            registerUser(object).then((response)=>{
                setTimeout(()=>{
                    setLoading("off");
                    setResult(response.message);
                },1000)
            }).catch((response)=>{
                setLoading("off");
                setResult(response.message)});
                setTimeout(()=>{
                  setResult("")
                },5000)
        }
    })
    //useEffect is used to make changes when the page is loaded
    useEffect(()=>{
        setLoading("off");
    },[])


    return(
        <form className="flex flex-col items-center text-center" onSubmit={handleSubmit}>
                            <input type="text" placeholder="User Name" className="input text-center m-2" value={values.name} onChange={handleChange} onBlur={handleBlur} name="name"/>
                             {touched.name && errors.name?(<div className="font-bold text-xs mb-1">{errors.name}</div>):("")}
                            <input type="email" placeholder="Email Id" className="input text-center m-2" value={values.email} onChange={handleChange} onBlur={handleBlur} name="email"/>
                            {touched.email && errors.email?(<div className="font-bold text-xs mb-1">{errors.email}</div>):("")}
                            <input type="password" placeholder="Password" className="input text-center m-2" value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" />
                             {touched.password && errors.password?(<div className="font-bold text-xs mb-1">{errors.password}</div>):("")}
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary mt-3" type="submit">{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Signup"}</button>
                    </div>
                            {result?(<div className="font-bold text-xs mt-3">{result}</div>):""}
                    </form>
    )
}