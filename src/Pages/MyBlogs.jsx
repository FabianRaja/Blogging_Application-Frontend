import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MyBlogsContent from "../Components/MyBlogsContent";
import { useContext, useEffect } from "react"
import { AppCtx } from "../Context/AppContext"

export default function MyBlogs(){

    const navigate=useNavigate();

      const {myData}=useContext(AppCtx);


    useEffect(()=>{
          if(!localStorage.getItem("token")){
            navigate("/")
          }
        },[])

    return(
        <div>
            <Navbar/>
            <div className="pt-27">
            {myData && myData.map((value,index)=>(
                <MyBlogsContent key={index}
                author={value.author}
                category={value.category}
                content={value.content}
                createdAt={value.createdAt}
                image={value.image?value.image:"No URL provided by the author"}
                title={value.title}
                updatedAt={value.updatedAt}
                id={value._id}
                />
            ))}
            </div>
            {myData.length===0?<h1 className="text-center mt-20 uppercase text-neutral text-xl font-bold">No blogs created</h1>:""}


        </div>
    )
}