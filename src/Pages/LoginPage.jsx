import { useContext } from "react"
import { AppCtx } from "../Context/AppContext"
import Login from "../Components/Login";
import Signup from "../Components/Signup";

export default function LoginPage(){

    const {auth,setAuth}=useContext(AppCtx);

    return(
        <div className="login-page-section flex justify-center items-center text-center h-screen">

           <div className="card card-border bg-base-100 w-96 m-4">

            
                <div className="card-body items-center">
                   
                     <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Login" onClick={()=>setAuth("Login")} defaultChecked />
                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Register" onClick={()=>setAuth("Register")}/>
                    </div>

                    {auth==="Login"?(<Login/>):(<Signup/>)}
                    

                </div>
            </div>

        </div>
    )
}