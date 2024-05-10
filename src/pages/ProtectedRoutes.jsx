import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const [hasToken, setHasToken] = useState() 
  useEffect(() => {
    setHasToken(localStorage.getItem('token'))
  }, [])

  if (hasToken) {
    return (
      <Outlet></Outlet>
    )
  }
}

export default ProtectedRoutes