import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

export default function CreateBlog(){
    
    const navigate=useNavigate();
    useEffect(()=>{
          if(!localStorage.getItem("token")){
            navigate("/")
          }
        },[])

    return(
        <div>
             <Navbar/>

               <div className="login-page-section flex justify-center text-center mt-15 ">
              
                         <div className="card card-border bg-base-100 w-2xl m-4">
              
                          
                              <div className="card-body items-center">
                                 
                                
              
                                  <div className="flex flex-col items-center text-center w-2xl p-5" >
                                <input type="text" placeholder="Title" className="input text-center m-2" />
                                <input type="text" placeholder="Category" className="input text-center m-2" />
                                <input type="text" placeholder="Content" className="input text-center m-2" />
                                <input type="text" placeholder="Image URL(Optional)" className="input text-center m-2" />

                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary mt-3">Upload</button>
                            </div>
                            
                            </div>
              
                              </div>
                          </div>
              
                      </div>
              
        </div>
       
    )
}