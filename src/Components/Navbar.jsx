import { useNavigate } from "react-router-dom";

export default function Navbar(){
    
    const navigate=useNavigate();
    return(
        <div className="navbar bg-base-100 p-4 shadow-sm fixed top-0 left-0 right-0 z-50 w-full">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl" onClick={()=>navigate("/home")}>BLOGS</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a className="text-l" onClick={()=>navigate("/create")}>CREATE BLOG</a></li>
                    <li><a className="text-l" onClick={()=>navigate("/myblogs")}>MY BLOGS</a></li>
                    </ul>
                </div>
            </div>
    )
}