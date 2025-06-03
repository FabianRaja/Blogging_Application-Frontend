import { useContext, useEffect } from "react";
import Content from "../Components/Content";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";
import { getBlog } from "../Helpers/Helper";

export default function HomePage(){
    
    const navigate=useNavigate();

    const {data,setData,filterCategory,setFilterCategory,filterAuthor,setFilterAuthor,authorsList,categoryList}=useContext(AppCtx);

     

    useEffect(()=>{
        if(!localStorage.getItem("token")){
          navigate("/")
        };
       // to filter blog data 
        if(filterAuthor && filterCategory){
        getBlog(localStorage.getItem("token"),`category=${filterCategory}&author=${filterAuthor}`).then((res)=>{
              if(res.message==="Successfull"){
                  setData(res.data);
              }
        }).catch((res)=>{
          console.log(res)
       })
      }else if(filterCategory){
         getBlog(localStorage.getItem("token"),`category=${filterCategory}`).then((res)=>{
              if(res.message==="Successfull"){
                  setData(res.data);
              }
        }).catch((res)=>{
          console.log(res)
       })
      }else if(filterAuthor){
         getBlog(localStorage.getItem("token"),`author=${filterAuthor}`).then((res)=>{
              if(res.message==="Successfull"){
                  setData(res.data);
              }
        }).catch((res)=>{
          console.log(res)
       })
      }else{
        getBlog(localStorage.getItem("token")).then((res)=>{
              if(res.message==="Successfull"){
                  setData(res.data);
              }
        }).catch((res)=>{
          console.log(res)
       })
      }
    },[filterAuthor,filterCategory]) 

    return(
        <div className="home-page-section">
           <Navbar/>
           <div className="flex text-center justify-center pt-30 pb-6 mr-10 ml-10">
            <select value={filterCategory} onChange={(e)=>setFilterCategory(e.target.value)} className="select select-primary mr-2">
            <option value={""}>All Category</option>
            {categoryList && categoryList.map((value,index)=>(<option key={index} value={value}>{value}</option>))}
            </select>
            <select value={filterAuthor} onChange={(e)=>setFilterAuthor(e.target.value)} className="select select-primary">
            <option value={""}>All Author</option>
             {authorsList && authorsList.map((value,index)=>(<option key={index} value={value}>{value}</option>))}
            
            </select>
          </div>
           
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