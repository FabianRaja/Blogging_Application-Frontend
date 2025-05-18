import { useContext, useEffect } from "react"
import { AppCtx } from "../Context/AppContext"

export default function Login(){
    const {name,setName,email,setEmail}=useContext(AppCtx);
    
   

    
    return(
        <form className="flex flex-col items-center text-center" >
                            <input type="email" placeholder="Email Id" value={name} className="input text-center m-2" onChange={(e)=>setName(e.target.value)} />
                            <input type="text" placeholder="Password" value={email} className="input text-center m-2" onChange={(e)=>setEmail(e.target.value)} />

                            <div className="card-actions justify-end">
                            <button type="submit" className="btn btn-primary mt-3">Login</button>
                    </div>
                    
                    </form>
    )
}