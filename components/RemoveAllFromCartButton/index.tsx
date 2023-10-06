'use client'
import * as React from 'react';
import removeCarted from '../shared/removeCarted';
import { useRouter } from "next/navigation";

export default function removeAllFromCart() {
    const router = useRouter()

    function removeFromCart() {
        removeCarted(null)
        router.refresh()
    }

    return (
        <h1 onClick={removeFromCart} className="text-xs whitespace-nowrap font-bold cursor-pointer">
            Remove All
            <div className='h-px w-full ease-in-out duration-300 bg-zinc-900'></div>
        </h1>
    )
}