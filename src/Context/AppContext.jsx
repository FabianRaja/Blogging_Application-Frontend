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
   

    useEffect(()=>{
      if(localStorage.getItem("token")){
          getBlog(localStorage.getItem("token")).then((response)=>{
                        if(response.message==="Successfull"){
                            setData(response.data)
                        }
                    }).catch((response)=>{
                        console.log(response);
                    })
      }
    },[])
    

    return(
        <AppCtx.Provider value={{auth,setAuth,result,setResult,loading,setLoading,data,setData,myData,setMyData}}>
            {children}
        </AppCtx.Provider>
    )
}