import { createContext, useState } from "react";

export const AppCtx=createContext();

export default function AppContext({children}){
    //required states is created and passed to the AppCtx Provider for global usage
    const [auth,setAuth]=useState("Login");
    const [result,setResult]=useState("");
    const [loading,setLoading]=useState("");
   
    return(
        <AppCtx.Provider value={{auth,setAuth,result,setResult,loading,setLoading}}>
            {children}
        </AppCtx.Provider>
    )
}