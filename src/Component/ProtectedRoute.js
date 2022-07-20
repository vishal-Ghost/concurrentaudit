import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import App from '../App'

const ProtectedRoute = ({isLogged}) => {
  return (
    <>
    {isLogged ? <Outlet/> : <Navigate to='/'/>}
    
    </>
  )
}

export default ProtectedRoute