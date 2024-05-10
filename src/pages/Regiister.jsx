import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../assets/hooks/useAuth'
import { Navigate } from 'react-router-dom'
import "./styles/Register.css"

const Regiister = () => {
  const {handleSubmit, register, reset} = useForm()
  const [user] = useAuth()

  const [postRegister, isLoadingRegister, hasErrorRegister] = useAuth()

  const submit = data =>{
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users"  
    user(url, data)
      reset({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
      })
  }


  return (
    <div className='register__container'>
      <div className='register__box'>
      <form>
        <div className='register__params'>
          <label className='register__label' htmlFor='firstName'>First Name</label>
          <input className='register__input' {...register("firstName")} id='firstName' type="text" />
        </div>
        <div className='register__params'>
          <label className='register__label' htmlFor='lastName'>Last Name</label>
          <input className='register__input' {...register("lastName")} id='lastName' type="text" />
        </div>
        <div className='register__params'>
          <label className='register__label' htmlFor='email'>Email</label>
          <input className='register__input' {...register("email")} id='email' type="text" />
        </div>
        <div className='register__params'>
          <label className='register__label' htmlFor='password'>Password</label>
          <input className='register__input' {...register("password")} id='password' type="password" />
        </div>
        <div className='register__params'>
          <label className='register__label' htmlFor='phone'>Phone</label>
          <input className='register__input' {...register("phone")} id='phone' type="number" />
        </div>
        <button className='register__button' type='submit' onClick={handleSubmit(submit)}>Submit</button>
      </form>

      </div>
    </div>
  )
}

export default Regiister