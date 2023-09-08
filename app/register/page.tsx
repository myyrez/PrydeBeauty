import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const RegisterPage = () => {
    return (
        <div className='relative flex justify-center h-fit text-stone-900'>
            <Navbar />
            <div className='absolute animate-spin-slow inset-x-0 inset-y-0 mx-auto my-auto h-44 w-44 rounded-full z-0 bg-gradient-to-br from-pink-600 to-yellow-400 blur-2xl'></div>

            <div className='flex flex-col z-20 w-[90%] min-h-screen items-center justify-center gap-6'>
                <h1 className='font-bold text-4xl italic font-serif'>Register</h1>

                <p className='h-4 text-xs font-bold'>Obs: Don't use any private information. Credential is your account ID and username.</p>
                <div className='flex flex-col gap-3'>
                    <input placeholder='Name' className='w-80 p-3 border-2 border-zinc-900 focus:outline-none'/>
                    <input placeholder='Create Credential' className='w-80 p-3 border-2 border-zinc-900 focus:outline-none'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <input placeholder='Password' className='w-80 p-3 border-2 border-zinc-900 focus:outline-none'/>
                    <input placeholder='Confirm Password' className='w-80 p-3 border-2 border-zinc-900 focus:outline-none'/>
                </div>

                <div className='flex justify-center w-fit h-11 py-1 px-4 border-solid border-2 bg-stone-900 border-stone-900 text-stone-50'>
                    <p className='h-auto m-auto text-sm leading-[30px] font-bold'>Continue</p>
                </div>

                <Link href='/login' className="text-xs font-bold pb-3">
                    I Already Have an Account
                    <div className='h-px w-full ease-in-out duration-300 bg-zinc-900'></div>
                </Link>
            </div>
        </div>
    )
}
export default RegisterPage