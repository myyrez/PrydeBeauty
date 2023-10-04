import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import prisma from '@/db';
import { redirect } from 'next/navigation';
import { hash } from 'bcrypt';

async function createUser(data: FormData) {
    "use server"

    const name = data.get("name")?.valueOf()
    if (typeof name !== "string" || name.length === 0) {
        throw new Error("Invalid Name")
    }

    const username = data.get("email")?.valueOf()
    if (typeof username !== "string" || username.length === 0) {
        throw new Error("Invalid Username")
    }

    const password = data.get("password")?.valueOf() 
    if (typeof password !== "string" || password.length < 3) {
        throw new Error("Invalid Username")
    }

    const hashedPassword = await hash(password, 10)

    await prisma.user.create({
        data: { name, username, password: hashedPassword }
    })

    redirect("/login")
}

const RegisterPage = () => {
    return (
        <div className='relative flex justify-center h-fit text-stone-900'>
            <Navbar />
            <div className='absolute animate-spin-slow inset-x-0 inset-y-0 mx-auto my-auto h-44 w-44 rounded-full z-0 bg-gradient-to-br from-pink-600 to-yellow-400 blur-2xl'></div>

            <form action={createUser} className='flex flex-col z-20 w-[90%] min-h-screen items-center justify-center gap-6'>
                <h1 className='font-bold text-4xl italic font-serif'>Register</h1>

                <p className='h-4 text-xs font-bold'>Obs: Don't use any private information. Type yourName@whatever.com and a short password ;)</p>
                <div className='flex flex-col gap-3'>
                    <input name='name' placeholder='Name' className='w-80 p-3 border-2 border-zinc-900 focus:outline-none'/>
                    <input name='email' placeholder='Create email' className='w-80 p-3 border-2 border-zinc-900 focus:outline-none'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <input name='password' placeholder='Password' className='w-80 p-3 border-2 border-zinc-900 focus:outline-none'/>
                    <input placeholder='Confirm Password' className='w-80 p-3 border-2 border-zinc-900 focus:outline-none'/>
                </div>

                <button type='submit' className='flex justify-center w-fit h-11 py-1 px-4 border-solid border-2 bg-stone-900 border-stone-900 text-stone-50'>
                    <p className='h-auto m-auto text-sm leading-[30px] font-bold'>Continue</p>
                </button>

                <Link href='/login' className="text-xs font-bold pb-3">
                    I Already Have an Account
                    <div className='h-px w-full ease-in-out duration-300 bg-zinc-900'></div>
                </Link>
            </form>
        </div>
    )
}
export default RegisterPage