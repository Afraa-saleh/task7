'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type Props = {
  onClose: () => void;
};

export default function Login({ onClose }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const [showPassword, setShowPassword] = useState(false);



  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
      <div className='bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative animate-fade-in'>
        <button
          onClick={onClose}
          className='absolute top-6 right-3 text-gray-500 hover:text-mainBg cursor-pointer'>
          <IoClose size={24} /></button>

        <h2 className='text-2xl lg:text-4xl font-bold text-textc mb-6'>Login</h2>

        <form className='space-y-6'>
          <div>
            <label className='font-medium text-textc/80'>Email Address</label>
            <input
              type='email'
              placeholder='Enter your email address'
              className='w-full px-4 py-4 border border-textc/20 rounded focus:outline-none focus:border-mainBg'
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>


          <div className='relative'>
            <label className='font-medium text-textc/80'>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password'
              className='w-full px-4 py-4 pr-12 border border-textc/20 rounded focus:outline-none focus:border-mainBg'
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            
            
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-[43px] text-textc/50 hover:text-mainBg'>
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>


            <div className='font-bold mt-4 text-right text-textc/50 cursor-pointer hover:underline'>
              Forgot your password?
            </div>
          </div>

          <button
            type='submit'
            className='w-full py-2 bg-mainBg text-white rounded-4xl hover:bg-tran hover:border hover:border-mainBg hover:text-mainBg transition cursor-pointer'>Sign In</button>

          <div className='text-center text-textc/40 text-sm'>or</div>

          <button
            type='button'
            className='w-full flex items-center justify-center gap-2 border border-textc/50 py-2 rounded-4xl text-textc/70 hover:border-mainBg hover:text-mainBg transition cursor-pointer'>
            <FcGoogle className='w-6 h-6' />Sign in with Google</button>

          <p className='text-center text-sm mt-4 text-textc'>
            Don’t have an account?{' '}
            <span className='text-mainBg font-medium cursor-pointer hover:underline'>
              Sign Up
            </span>
            
          </p>
        </form>
      </div>
    </div>
  );
}
