import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../features/auth/authSlice'

const Navbar = () => {

    const {user} = useSelector((state) =>state.auth)

    const dispatch = useDispatch()

    const navigate = useNavigate()


   const handleLogOut = ()=>{

    dispatch(logOut())

    navigate("/login")

   }



  return (
    <nav className="navbar bg-info">
    <div className="container-fluid">
   <Link to={"/"}>   <span className="navbar-brand mb-0 h1">AUTH</span> </Link>
      <span>
        {
            !user ? (
                <>
                <Link to={"/register"}>  <button className="btn btn-success rounded-0 mx-2">Register</button></Link>
      <Link to={"/login"}>   <button className="btn btn-success rounded-0 mx-2">Login</button></Link>

                </>

            ) : (
                <button className="btn btn-danger rounded-0 mx-2" onClick={handleLogOut}>Logout</button>
            )
        }
              
      </span>
    </div>
  </nav>
  )
}

export default Navbar

