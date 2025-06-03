import { createContext, useEffect, useState } from "react";
import { getBlog } from "../Helpers/Helper";

export const AppCtx=createContext();

export default function AppContext({children}){
    //required states is created and passed to the AppCtx Provider for global usage
    const [auth,setAuth]=useState("Login");
    const [result,setResult]=useState("");
    const [loading,setLoading]=useState("");
    const [data,setData]=useState([]);
    const [myData,setMyData]=useState([]);
    const [editData,setEditData]=useState([]);
    const [filterCategory,setFilterCategory]=useState("");
    const [filterAuthor,setFilterAuthor]=useState("");
    const [authorsList,setAuthorsList]=useState([]);
      const [categoryList,setCategoryList]=useState([]);

    useEffect(()=>{
       

      if(localStorage.getItem("token")){
           getBlog(localStorage.getItem("token")).then((response)=>{
                        if(response.message==="Successfull"){
                            setData(response.data);
                            (response.data).map((value,index)=>{
                                if(!authorsList.includes(value.author)){
                                 authorsList.push(value.author);
                                }});
                            (response.data).map((value,index)=>{
                                if(!categoryList.includes(value.category)){
                                 categoryList.push(value.category);
                                }});    
                            const myBlogData=(response.data).filter((value,index)=>value.userId==localStorage.getItem("id"));
                            setMyData(myBlogData);
                        }
                    }).catch((response)=>{
                        console.log(response);
                    });
      }
      
    },[])
    

    return(
        <AppCtx.Provider value={{auth,setAuth,result,setResult,loading,setLoading,data,setData,myData,setMyData,editData,setEditData,filterCategory,setFilterCategory,filterAuthor,setFilterAuthor,authorsList,setAuthorsList,categoryList,setCategoryList}}>
            {children}
        </AppCtx.Provider>
    )
}