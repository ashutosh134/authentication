import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

const {user} = useSelector((state)=>state.auth)

const navigate = useNavigate()

useEffect(()=>{

  if(!user){
    navigate("/register")
  }
  
}, [user])



  return (
     <div className="container p-5">
    <h1 className="display-6 text-center p-5">WELCOME USER</h1>
    </div>
  )
}

export default Home
