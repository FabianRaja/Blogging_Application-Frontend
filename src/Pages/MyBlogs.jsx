import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MyBlogsContent from "../Components/MyBlogsContent";
import { useContext, useEffect } from "react"
import { AppCtx } from "../Context/AppContext"

export default function MyBlogs(){

    const navigate=useNavigate();

      const {data,myData,setMyData}=useContext(AppCtx);


    useEffect(()=>{
          if(!localStorage.getItem("token")){
            navigate("/")
          }
          const myData=data.filter((value,index)=>value.userId==localStorage.getItem("id"));
          setMyData(myData);
        },[])

    return(
        <div>
            <Navbar/>
            {myData && myData.map((value,index)=>(
                <MyBlogsContent key={index}
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