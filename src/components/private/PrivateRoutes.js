import { isLogin } from '../../auth'
import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'

const PrivateRoutes = () => {
    if (isLogin()) {
        return <Outlet/>
      }
      else 
        {
            return <Navigate to="/"/>
        }
    }



export default PrivateRoutes