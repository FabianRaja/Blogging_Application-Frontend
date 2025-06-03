const API="https://blogging-application-backend-viwj.onrender.com/auth"
const DataAPI="https://blogging-application-backend-viwj.onrender.com/blogs"
// const API="http://localhost:9000/auth"
// const DataAPI="http://localhost:9000/blogs";

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

//function to get all blog data
export async function getBlog(token,query){
    try{
        const res=await fetch(`${DataAPI}?${query}`,{
            method:"GET",   
            headers:{
                "Content-type":"application/json",
                "x-auth-token":token
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error getting getUrl",error);
    }
}

//function to create  blog data
export async function createBlog(obj){
    try{
        const res=await fetch(`${DataAPI}`,{
            method:"POST",  
            body:JSON.stringify(obj), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error creating blog",error);
    }
}

//function to delete blog data
export async function deleteBlog(id){
    try{
        const res=await fetch(`${DataAPI}/${id}`,{
            method:"DELETE",  
            body:JSON.stringify({}), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error creating blog",error);
    }
}

//function to edit blog data
export async function editBlog(id,obj){
    try{
        const res=await fetch(`${DataAPI}/${id}`,{
            method:"PUT",  
            body:JSON.stringify(obj), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error updating blog",error);
    }
}

