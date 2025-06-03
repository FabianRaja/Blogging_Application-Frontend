import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { useFormik } from "formik";
import { updateBlogSchema } from "../Helpers/Schema";
import { editBlog } from "../Helpers/Helper";
import { useParams } from 'react-router-dom';

export default function UpdateBlog(){

    const {result,setResult,loading,setLoading,myData,editData,setEditData}=useContext(AppCtx);
    const { id } = useParams();
    
    const navigate=useNavigate();
    useEffect(()=>{
          setResult("")
          if(!localStorage.getItem("token")){
            navigate("/")
          }
          if(myData && id){
            const editMyData=myData.filter((value)=>value._id==id);
            if(editMyData){  
            setEditData(editMyData[0]);
            }
          }
        },[myData,id,navigate,setEditData])
    
 

    //creating formik for login page
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
      enableReinitialize:true,
        initialValues:{
            title:editData?.title||"",
            category:editData?.category||"",
            content:editData?.content||"",
            image:editData?.image||"",
            userId:localStorage.getItem("id"),
            author:localStorage.getItem("name")
        },
        //validation schema as login schema
        validationSchema:updateBlogSchema,
        onSubmit:(obj)=>{
            setLoading(true);
            // passing formikObj to login user function and handling responses
            editBlog(id,obj).then((result)=>{
                
                if(result.message==="Blog Updated"){
                        setLoading(false);
                        setResult(result.message);
                        setTimeout(()=>{
                         navigate("/myblogs");
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
    
    return(
        <div>
             <Navbar/>

               {editData && (<div className="flex justify-center items-center text-center pt-22 min-h-screen">
                         <form className="card card-border bg-base-100 w-2xl m-4" onSubmit={handleSubmit}>
                              <div className="card-body items-center">
                                <div className="flex flex-col items-center text-center w-2xl p-5" >
                                  <input type="text" placeholder="Title" className="input text-center m-2" value={values.title} name="title" onBlur={handleBlur} onChange={handleChange}/>
                                   {touched.title && errors.title?(<div className="text-secondary">{errors.title}</div>):""}
                                  <input type="text" placeholder="Category" className="input text-center m-2" value={values.category} name="category" onBlur={handleBlur} onChange={handleChange}/>
                                   {touched.category && errors.category?(<div className="text-secondary">{errors.category}</div>):""}
                                  <input type="text" placeholder="Content" className="input text-center m-2"value={values.content} name="content" onBlur={handleBlur} onChange={handleChange} />
                                   {touched.content && errors.content?(<div className="text-secondary">{errors.content}</div>):""}
                                  <input type="text" placeholder="Image URL(Optional)" className="input text-center m-2" value={values.image} name="image" onBlur={handleBlur} onChange={handleChange}/>
              
                                  <div className="card-actions justify-end">
                                    <button className="btn btn-primary mt-3" type="submit">{loading==true?<span className="loading loading-ring loading-sm"></span>:"Update"}</button>
                                  </div>
                                  {result?<div className="text-secondary uppercase mt-2">{result}</div>:""}
                                </div>
                              </div>
                         </form>
               </div>)}
              
        </div>
       
    )
}