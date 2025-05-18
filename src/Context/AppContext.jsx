import { createContext, useState } from "react";

export const AppCtx=createContext(null);

export default function AppContext({children}){
    //required states is created and passed to the AppCtx Provider for global usage
    const [auth,setAuth]=useState("Login")
   
    return(
        <AppCtx.Provider value={{auth,setAuth}}>
            {children}
        </AppCtx.Provider>
    )
}