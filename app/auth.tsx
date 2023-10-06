'use client'

import { signIn, signOut } from "next-auth/react"
import { PiSignOutLight } from 'react-icons/pi'

export const LoginButton = () => {
    return <button onClick={() => signIn()}>Sign in</button>
}

export const LogoutButton = () => {
    return (
        <div onClick={() => signOut()} className='flex justify-center w-[150px] h-11 py-1 mt-8 px-4 border-solid border-2 cursor-pointer bg-stone-900 text-stone-50 border-zinc-900'>
            <h1 className="flex items-center h-auto m-auto gap-3 font-bold">
                Sign out <PiSignOutLight className='text-2xl text-red-400' />
            </h1>
        </div>
    )
}