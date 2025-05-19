import { useContext, useEffect } from "react";
import Content from "../Components/Content";
import Filter from "../Components/Filter";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";

export default function HomePage(){
    
    const navigate=useNavigate();

    const {data,setData}=useContext(AppCtx);

    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/")
      }
    },[])

    return(
        <div className="home-page-section">
           <Navbar/>
           <Filter/>
           
           {data && data.map((value,index)=>(
            <Content key={index}
            author={value.author}
            category={value.category}
            content={value.content}
            createdAt={value.createdAt}
            image={value.image?value.image:"No URL provided by the author"}
            title={value.title}
            updatedAt={value.updatedAt}
            />
           ))}
           
           
           
           

        </div>
    )
}