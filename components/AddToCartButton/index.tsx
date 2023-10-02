'use client'

import React, {useState} from 'react';
import { useSession } from 'next-auth/react'
import { redirect } from "next/navigation"
import setCarted from '../shared/setCarted';
import { useRouter } from "next/navigation";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BsCheck2 } from 'react-icons/bs'

type CartButtonProps = {
    pageProductId: number,
    isProductCarted: boolean,
}

export default function AddToCartButton({ pageProductId, isProductCarted}: CartButtonProps) {
    const [updateButton, setUpdateButton] = useState(isProductCarted)
    const router = useRouter()

    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })

    function addToCart() {
        setCarted(pageProductId)
        if (!updateButton) setUpdateButton(true)
        router.refresh()
    }

    return (
        <>
            {/* <input type='checkbox' onClick={addToCart} onChange={e => setCarted(pageProductId, e.target.checked)} className='absolute'/> */}
            <div onClick={addToCart} className='flex justify-center w-full h-full m-auto py-1 px-4 bg-stone-900 text-zinc-50 cursor-pointer'>
                <p className='h-auto text-sm leading-[30px] font-semibold'>
                    {updateButton
                        ? <BsCheck2 className='text-3xl leading-[30px]' />
                        : 'Add to Cart'
                    }
                </p>
            </div>
        </>
    )
}