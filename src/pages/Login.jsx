import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../assets/hooks/useAuth'
import "./styles/Login.css"

const Login = () => {

  const {handleSubmit, register, reset} = useForm()
  const [loginUser] = useAuth()
  const [isLoading, setIsLoading] = useState(false) 
  const navigate = useNavigate()
    
  const [hasToken, setHasToken] = useState() 
  useEffect(() => {
    setHasToken(localStorage.getItem('token'))
  }, [hasToken])

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setHasToken(localStorage.getItem('token'))
  }
  
  const submit = data => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
    loginUser(url, data)
    reset({
      email: '',
      password: ''
    })
    setIsLoading(true)
    setTimeout(() => {
      setHasToken(localStorage.getItem('token'))
      setIsLoading(false)
    }, 3000);
  }
  return (
    <div className='login__container'>
    {
      isLoading? <p>Loading...</p> 
      :
      <div className='login__box'>

        {
          hasToken ? 
          <div>
            <p>You are logged in</p>
            <button className='logout__button' onClick={handleLogOut}>Log out</button>
          </div>
          :
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <div className='login__params'>
              <label className='login__label' htmlFor="email">Email</label>
              <input {...register("email")} id='email' type="text" placeholder='email'/>
            </div>
    
            <div className='login__params'>
              <label className='login__label' htmlFor="password">Password</label>
              <input {...register("password")} id='password' type="password" placeholder='password'/>
            </div>
            <button className='login__button'>Login</button>
          </form>
          <div>
            <p className='login__params'> If you are not register yet <span className="spam__register" onClick={(() => navigate("/register"))} >register</span></p>

          </div>
        </div>
        }
      
      </div>
    }
    </div>
    )
}

export default Login