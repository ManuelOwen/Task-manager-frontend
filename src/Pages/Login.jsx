import React from 'react';
import "./Login.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Login() {
  const schema = yup.object().shape({
    Username: yup.string().required("Username required"),
    Email: yup.string().required("Email required"),
    Password: yup.string().required("Password is required")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit(onSubmit)} className='folog'>
        <h1>LOGIN</h1>
        <input type="text" className='log' {...register("Username")} placeholder='Enter Username' required />
        <p>{errors.Username?.message}</p>
        <input type="text" className='log' {...register("Email")} placeholder='Enter Email' />
        <p>{errors.Email?.message}</p>
        <input type="text" className='log' {...register("Password")} placeholder='Enter Password' />
        <p>{errors.Password?.message}</p>
        <button type='submit' className='buton'>LOGIN</button>
        <h3>Don't have an account?Sign up</h3>
      </form>
    </div>
  );
}
