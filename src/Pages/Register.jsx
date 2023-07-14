import React from 'react'
import "./Register.css"
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

// import { yupResolver } from 'react-hook-form';


export default function Register() {
  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Email: yup.string().required('Email is required'),
    Password: yup.string().required('Password is required'),
    ConfirmPassword: yup.string().required('Confirm password is required')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  

  const onSubmit = (data) => {
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='register'>
     
      <div className='form'>
      <h1>sign Up </h1>
        <input
          className='reg'
          type="text"
          {...register("Username")}
          placeholder='Enter your Username'
          required
        />
        <p>{errors.Username?.message}</p>
        <input
          className='reg'
          type="text"
          {...register("Email")}
          placeholder='Enter your Email'
          required
        />
        <p>{errors.Email?.message}</p>
        <input
          className='reg'
          type="text"
          {...register("Password")}
          placeholder='Enter Password'
          required
        />
        <p>{errors.Password?.message}</p>
        <input
          className='reg'
          type="text"
          {...register("ConfirmPassword")}
          placeholder='Confirm password'
          required
        />
        <p>{errors.ConfirmPassword?.message}</p>
        <button className='but' type='submit'>Sign up</button>
        <h3>Have an account? Login.</h3>
      </div>
    </form>
  )
}
