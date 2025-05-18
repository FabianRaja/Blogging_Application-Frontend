export default function Signup(){
    return(
        <div className="flex flex-col items-center text-center">
                            <input type="text" placeholder="User Name" className="input text-center m-2" />
                            <input type="text" placeholder="Email Id" className="input text-center m-2" />
                            <input type="text" placeholder="Password" className="input text-center m-2" />

                            <div className="card-actions justify-end">
                            <button className="btn btn-primary mt-3">Signup</button>
                    </div>
                    
                    </div>
    )
}