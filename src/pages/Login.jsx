import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../features/auth/authSlice'

const Login = () => {

     const {isLoading , user , isSuccess, isError , message} = useSelector((state)=>state.auth)
    

     const navigate = useNavigate()

     const dispatch =useDispatch()

     const [formData ,setFormData] =useState({
        email:"",
        password:"",
      })


      const {email , password} = formData


      const handleChange = (e) =>{
       setFormData({
        ...formData,
        [e.target.name] : e.target.value
       })
        
      }


      const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(login(formData))
      }














     useEffect(()=>{
     
        if(isSuccess || user){
           navigate("/")
        }

        if(isError || message){
          toast.error(message)
        }

     },[user])


    


     if(isLoading){
        return(
            <div className="container p-5">
                <h1 className="text-center display-6">Loading.....</h1>
            </div>
        )
     }


  return (

   <>
        <h1 className='display-6 text-center py-3'>LOGIN</h1>
    <form className='p-5' onSubmit={handleSubmit}>
        
        <input type="email" className="form-control rounded-0 my-3  p-2" placeholder='EMAIL'
        name='email'
        onChange={handleChange}
        value={email}
        />
        <input type="password" className="form-control rounded-0 my-3  p-2" placeholder='PASSWORD'
         name='password'
         onChange={handleChange}
         value={password}
        />
        
        <button className=" btn btn-success rounded-0 w-100 my-3 p-2">Login</button>
      </form>
     </>
  )
}

export default Login