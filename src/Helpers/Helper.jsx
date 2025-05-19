const API="https://blogging-application-backend-viwj.onrender.com/auth"

//function to login user
export async function loginUser(object){
    try{
        const res=await fetch(`${API}/login`,{
            method:"POST",  
            body:JSON.stringify(object), 
            headers:{
                "Content-type":"application/json"
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error login user",error);
    }
}
//function to register user
export async function registerUser(object){
    try{
        const res=await fetch(`${API}/signup`,{
            method:"POST",  
            body:JSON.stringify(object), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error registering user",error);
    }
}