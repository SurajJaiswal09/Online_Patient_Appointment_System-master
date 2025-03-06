import React from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();

  const closeModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.close();
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {

      const loginData = {
        username: data.email, 
        password: data.password
      };

      const response = await axios.post('http://localhost:5000/login', loginData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role); 
        toast.success('Login successful!');
        closeModal();
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data);
      toast.error(error.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal bg-white cursor-default">
        <div className="modal-box cursor-default">
          <form onSubmit={handleSubmit(onSubmit)} action="" className='cursor-default'>
            {/* Close button */}
            <Link to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
              onClick={closeModal}
            >
              ✕
            </Link>
            <h2 className="font-bold text-3xl cursor-default">CLERK LOGIN</h2>
            {/* Username */}
            <div className='mt-4 space-y-2 cursor-default'>
              <span className='cursor-default'>Username</span>
              <br />
              <input type="text" placeholder='Enter your username' className='w-80 px-3 py-1 border rounded-md outline-none cursor-pointer' {...register("email", { required: true })} />
              <br />
              {errors.email && <span className='text-sm text-red-500 cursor-default'>This field is required</span>}
            </div>
            {/* Password */}
            <div className='mt-4 space-y-2 cursor-default'>
              <span className='cursor-default'>Password</span>
              <br />
              <input 
                type="password" 
                placeholder='Enter your password' 
                className='w-80 px-3 py-1 border rounded-md outline-none cursor-pointer' 
                {...register("password", { required: true })} 
              />
              <br />
              {errors.password && <span className='text-sm text-red-500 cursor-default'>This field is required</span>}
            </div>
            {/* Button */}
            <div className='flex justify-around mt-4 cursor-default'>
              <button type="submit" className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Login</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Login;
