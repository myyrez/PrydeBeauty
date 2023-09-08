import * as React from 'react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className='relative flex justify-center h-fit text-stone-900'>
            <Navbar />
            <div className='absolute animate-spin-slow inset-x-0 inset-y-0 mx-auto my-auto h-44 w-44 rounded-full z-0 bg-gradient-to-br from-purple-600 to-orange-600 blur-2xl'></div>

            <div className='flex flex-col z-20 w-[90%] min-h-screen items-center justify-center gap-6'>
                <h1 className='font-bold text-4xl italic font-serif'>Login</h1>

                <input placeholder='Credential' className='w-96 p-3 border-2 border-zinc-900 focus:outline-none'/>
                <input placeholder='Password' className='w-96 p-3 border-2 border-zinc-900 focus:outline-none'/>

                <div className='flex justify-center w-fit h-11 py-1 px-4 border-solid border-2 bg-stone-900 border-stone-900 text-stone-50'>
                    <p className='h-auto m-auto text-sm leading-[30px] font-bold'>Continue</p>
                </div>

                <Link href='/register' className="text-xs font-bold">
                    I Don't Have an Account
                    <div className='h-px w-full ease-in-out duration-300 bg-zinc-900'></div>
                </Link>
            </div>
        </div>
    )
}
export default LoginPage