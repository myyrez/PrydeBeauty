'use client'
import React, { useRef } from 'react'
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { signIn } from 'next-auth/react'

const LoginPage = () => {
    const email = useRef("")
    const password = useRef("")

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        signIn('credentials', {
            email: email.current,
            password: password.current,
            redirect: true,
            callbackUrl: "http://localhost:3000"
        })
    }

    return (
        
            <form onSubmit={onSubmit}>
        <div className='relative flex justify-center h-fit text-stone-900'>
            <Navbar />
            <div className='absolute animate-spin-slow inset-x-0 inset-y-0 mx-auto my-auto h-44 w-44 rounded-full z-0 bg-gradient-to-br from-purple-600 to-orange-600 blur-2xl'></div>

            <div className='flex flex-col z-20 w-[90%] min-h-screen items-center justify-center gap-6'>
                <h1 className='font-bold text-4xl italic font-serif'>Login</h1>
                <input name='email' type='email' onChange={(e) => (email.current = e.target.value)} placeholder='Email' className='w-64 p-3 border-2 border-zinc-900 focus:outline-none'/>
                <input name='password' type='password' onChange={(e) => (password.current = e.target.value)} placeholder='Password' className='w-64 p-3 border-2 border-zinc-900 focus:outline-none'/>
                <button type='submit' className='flex justify-center w-fit h-11 py-1 px-4 border-solid border-2 bg-stone-900 border-stone-900 text-stone-50'>
                    <p className='h-auto m-auto text-sm leading-[30px] font-bold'>Continue</p>
                </button>

                <Link href='/register' className="text-xs font-bold">
                    I Don't Have an Account
                    <div className='h-px w-full ease-in-out duration-300 bg-zinc-900'></div>
                </Link>
            </div>
        </div>
                </form>
        
    )
}
export default LoginPage