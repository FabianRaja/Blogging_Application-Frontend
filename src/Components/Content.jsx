export default function Content({title,content,author,category,image,createdAt,updatedAt}){
    return(
        <div className="flex justify-center">
         <div className="card  bg-base-100 w-6xl m-5 text-center shadow-sm">
            
            <div className="card-body p-8">
                <h2 className="card-title justify-center mb-1 text-xl uppercase underline">{title}</h2>
                <p className="mb-2">{content}</p>
                <div className="card-actions justify-center">

                <div className="collapse bg-base-100 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">View Details</div>
                <div className="collapse-content text-sm text-center">
                    <h6>Author - {author}</h6>
                    <h6>Category - {category}</h6>
                    <h6>Image URL - {image}</h6>
                    <h6>Created At - {createdAt}</h6>
                    <h6>Updated At - {updatedAt}</h6>
                </div>
                </div>
        

                </div>
            </div>
        </div>
            
        </div>
    )     
}