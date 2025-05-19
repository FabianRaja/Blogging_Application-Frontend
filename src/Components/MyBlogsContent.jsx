import { useNavigate } from "react-router-dom"


export default function MyBlogsContent({title,content,author,category,image,createdAt,updatedAt}){
    
    const navigate=useNavigate();
    return(
        <div className="flex justify-center">
         <div className="card  bg-base-100 w-6xl m-10 text-center shadow-sm">
            
            <div className="card-body p-8">
                <h2 className="card-title justify-center mb-1 text-xl uppercase underline">{title}</h2>
                <p className="mb-2">{content}</p>
                <div className="card-actions justify-center">
                    <h6>Author - {author}</h6>
                    <h6>Category - {category}</h6>
                    <h6>Image URL - {image}</h6>
                    <h6>Created At - {createdAt}</h6>
                    <h6>Updated At - {updatedAt}</h6>
                </div>
                <div className="flex justify-center">
                 <button className="btn btn-primary m-3" onClick={()=>navigate("/update")}>Edit</button>
                <button className="btn btn-primary m-3">Delete</button>
                </div>
            </div>
        </div>
            
        </div>
    )
}