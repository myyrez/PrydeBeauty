'use client'

import * as React from 'react';
import { useSession } from 'next-auth/react'
import { redirect } from "next/navigation"

export default function AddToCartButton() {

    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })

    function addToCart() {
        console.log('add to cart logic')
    }

    return (
        <div onClick={addToCart} className='flex justify-center w-4/5 m-auto mt-4 py-1 px-4 border-solid border-2 border-zinc-900 cursor-pointer'>
            <p className='h-auto text-sm leading-[30px] font-bold'>Add to Cart</p>
        </div>
    )
}