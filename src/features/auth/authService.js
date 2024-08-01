import axios from "axios"

export const registerData = async(formData)=>{
    const response = await axios.post("https://auth-backend-93eo.onrender.com/api/user/register" , formData)
    localStorage.setItem("user",JSON.stringify(response.data))
    return await response.data

}



export const loginUser = async(formData)=>{
    const response = await axios.post("https://auth-backend-93eo.onrender.com/api/user/login" , formData)
    localStorage.setItem("user" , JSON.stringify(response.data))
    return await response.data

}

