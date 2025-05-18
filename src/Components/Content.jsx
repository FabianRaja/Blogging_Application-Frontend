export default function Content(){
    return(
        <div className="flex justify-center">
         <div className="card  bg-base-100 w-6xl m-10 text-center shadow-sm">
            
            <div className="card-body p-8">
                <h2 className="card-title justify-center mb-1 text-xl uppercase underline">Cricketing Genius</h2>
                <p className="mb-2">A card component has a figure, a body part, and inside body there are title and actions parts,A card component has a figure, a body part, and inside body there are title and actions partsA card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-center">

                <div className="collapse bg-base-100 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">View Details</div>
                <div className="collapse-content text-sm text-center">
                    <h6>Author - Deva</h6>
                    <h6>Category - Music</h6>
                    <h6>Image URL - "https://google.com"</h6>
                    <h6>Created At - 12-05-2025</h6>
                    <h6>Updated At - 16-05-2025</h6>
                </div>
                </div>
        

                </div>
            </div>
        </div>
            
        </div>
    )     
}