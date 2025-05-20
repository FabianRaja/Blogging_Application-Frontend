import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { loginSchema } from "../Helpers/Schema";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Helpers/Helper";

export default function Login(){

    const {result,setResult,loading,setLoading,setData}=useContext(AppCtx);
    const navigate=useNavigate();

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:loginSchema,
        onSubmit:(object)=>{
            setLoading("on");

            loginUser(object).then((response)=>{
                if(response.message==="Logged in successful"){
                    localStorage.setItem("token",response.token);
                    localStorage.setItem("name",response.data.name);
                    localStorage.setItem("id",response.data._id);
                    setTimeout(()=>{
                        setLoading("off");
                        setResult(response.message);
                        navigate("/home");
                        window.location.reload();
                    },3000)
                    setTimeout(()=>{
                        setResult("")
                    },5000)              
                }else{
                    setTimeout(()=>{
                        setLoading("off");
                        setResult(response.message);
                    },1000);
                }
            }).catch((response)=>{
                setLoading("off");
                setResult(response.message)
            });
        }})

         //useEffect is used to make changes when the page is loaded
    useEffect(()=>{
        setLoading("off");
    },[])
    
    return(
        <form className="flex flex-col items-center text-center" onSubmit={handleSubmit}>
                            <input type="email" placeholder="Email Id"  className="input text-center m-2" value={values.email} onChange={handleChange} onBlur={handleBlur} name="email"/>
                            {touched.email && errors.email?(<div className="font-bold text-xs mb-1">{errors.email}</div>):("")}
                            <input type="password" placeholder="Password"  className="input text-center m-2" value={values.password} onChange={handleChange} onBlur={handleBlur} name="password"/>
                             {touched.password && errors.password?(<div className="font-bold text-xs mb-1">{errors.password}</div>):("")}
                            <div className="card-actions justify-end">
                            <button type="submit" className="btn btn-primary mt-3">{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Login"}</button>
                            
                    </div>
                      {result?(<div className="font-bold text-sm mt-3 capitalize">{result}</div>):""}
                    </form>
    )
}