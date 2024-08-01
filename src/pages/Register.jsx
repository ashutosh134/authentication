
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../features/auth/authSlice'

const Register = () => {


    


    
  const dispatch = useDispatch()

    const {isLoading , user ,isSuccess, isError, message} = useSelector((state)=>state.auth)


    const navigate = useNavigate()


    const [formData , setFormData] = useState({
        name:"",
        email:"",
        password:"",
        password2:"",
    })

    const {name , email , password ,password2} = formData

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        dispatch(register(formData))
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
        return (
        <div className="conatiner p-5">
            <h1 className="display-6 text-center ">Loading....</h1>
        </div>
    )
    }


  return (
    
        
    <form className='p-5' onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" className="form-control rounded-0 my-3 p-2" placeholder='NAME'
        name='name'
        onChange={handleChange}
        value={name}
        />
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
        <input type="password" className="form-control rounded-0 my-3 p-2" placeholder='CONFIRM-PASSWORD'
         name='password2'
         onChange={handleChange}
         value={password2}
        />
        <button className=" btn btn-success rounded-0 w-100 my-3 p-2">Register</button>
      </form>
     
  )
}


export default Register;


