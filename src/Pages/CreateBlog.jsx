import { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";
import { createBlogSchema } from "../Helpers/Schema";
import { useFormik } from "formik";
import { createBlog } from "../Helpers/Helper";

export default function CreateBlog(){
    
    const navigate=useNavigate();

    const {result,setResult,loading,setLoading}=useContext(AppCtx);

    //creating formik for login page
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            title:"",
            category:"",
            content:"",
            image:"",
            userId:localStorage.getItem("id"),
            author:localStorage.getItem("name")
        },
        //validation schema as login schema
        validationSchema:createBlogSchema,
        onSubmit:(obj)=>{
            setLoading(true);
            // passing formikObj to login user function and handling responses
            createBlog(obj).then((result)=>{
                
                if(result.message==="Blog Uploaded"){
                        setLoading(false);
                        setResult(result.message);
                        setTimeout(()=>{
                         navigate("/home");
                        },2000)
                        setTimeout(()=>{
                          window.location.reload();
                        },2100)
                       
                }else{
                    setLoading(false);
                    setResult(result.message)
                }  
            }).catch((error)=>{setLoading(false);
                setResult(error.message)
            })
          
        }
    })
    
    useEffect(()=>{
          if(!localStorage.getItem("token")){
            navigate("/")
          }
        },[])

    return(
        <div>
             <Navbar/>

               <div className="flex justify-center items-center text-center min-h-screen pt-20" >
              
                         <div className="card card-border bg-base-100 w-full max-w-2xl m-4">
              
                          
                              <div className="card-body items-center" >
                                 
                                
              
                                  <form className="flex flex-col items-center text-center w-full p-5" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Title" className="input text-center m-2" value={values.title} name="title" onBlur={handleBlur} onChange={handleChange}/>
                                 {touched.title && errors.title?(<div className="text-secondary">{errors.title}</div>):""}
                                <input type="text" placeholder="Category" className="input text-center m-2" value={values.category} name="category" onBlur={handleBlur} onChange={handleChange}/>
                                 {touched.category && errors.category?(<div className="text-secondary">{errors.category}</div>):""}
                                <input type="text" placeholder="Content" className="input text-center m-2" value={values.content} name="content" onBlur={handleBlur} onChange={handleChange}/>
                                 {touched.content && errors.content?(<div className="text-secondary">{errors.content}</div>):""}
                                <input type="text" placeholder="Image URL(Optional)" className="input text-center m-2" value={values.image} name="image" onBlur={handleBlur} onChange={handleChange}/>
                                 
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary mt-3" type="submit">{loading==true?<span className="loading loading-ring loading-sm"></span>:"Upload"}</button>
                                     
                                    </div>
                                   {result?<div className="text-secondary uppercase mt-2">{result}</div>:""}
                            </form>
              
                              </div>
                          </div>
              
                      </div>
              
        </div>
       
    )
}