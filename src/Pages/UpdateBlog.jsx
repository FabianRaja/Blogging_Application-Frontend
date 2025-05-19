import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";

export default function UpdateBlog(){
    
    const navigate=useNavigate();
    useEffect(()=>{
          if(!localStorage.getItem("token")){
            navigate("/")
          }
        },[])


    return(
        <div>
             <Navbar/>

               <div className="flex justify-center text-center mt-15 ">
              
                         <div className="card card-border bg-base-100 w-2xl m-4">
              
                          
                              <div className="card-body items-center">
                                 
                                
              
                                  <div className="flex flex-col items-center text-center w-2xl p-5" >
                                <input type="text" placeholder="Title" className="input text-center m-2" />
                                <input type="text" placeholder="Category" className="input text-center m-2" />
                                <input type="text" placeholder="Content" className="input text-center m-2" />
                                <input type="text" placeholder="Image URL(Optional)" className="input text-center m-2" />

                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary mt-3">Update</button>
                            </div>
                            
                            </div>
              
                              </div>
                          </div>
              
                      </div>
              
        </div>
       
    )
}