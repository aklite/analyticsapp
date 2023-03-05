import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
const Logout = () => {
   const {logout,isAuthenticated}=useAuth0()
   const navigate=useNavigate()
   useEffect(()=>{
    if(!isAuthenticated){
        navigate('/')
    }
   },[isAuthenticated,navigate])
  return (
    <div>
        <button onClick={()=>{
            logout()
        }}>Logout</button>
    </div>
  )
}

export default Logout