'use client'
import * as React from 'react';
import removeCarted from '../shared/removeCarted';

export default function removeAllFromCart() {
    function removeFromCart() {
        removeCarted(null)
    }
    return (
        <h1 onClick={removeFromCart} className="text-xs font-bold cursor-pointer">
            Remove All
            <div className='h-px w-full ease-in-out duration-300 bg-zinc-900'></div>
        </h1>
    )
}