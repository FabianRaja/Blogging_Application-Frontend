import { useEffect } from "react";
import Content from "../Components/Content";
import Filter from "../Components/Filter";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    
    const navigate=useNavigate();
    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/")
      }
    },[])

    return(
        <div className="home-page-section">
           <Navbar/>
           <Filter/>
           <Content/>
           

        </div>
    )
}