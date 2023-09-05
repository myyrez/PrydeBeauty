'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RemoveButton from '@/components/shared/RemoveButton'
import { FaStar } from 'react-icons/fa';

type CartCardProps = {

}

const CartCard: React.FunctionComponent<CartCardProps> = (props) => {
    const {} = props;

    return (
        <div className="relative flex w-full items-start gap-2 my-4 h-[200px] bg-stone-400/5 backdrop-blur-sm">
            <Image src='/images/shade1.png' height={200} width={150} alt='product card image' />
            <div className="flex flex-col justify-center h-full w-full p-2 gap-2">
                <Link href='/product' className='w-fit'>
                    <h1 className="text-xl font-bold">
                        Product name
                        <div className='h-px w-1/6 ease-in-out duration-300 bg-zinc-900'></div>
                    </h1>
                </Link>

                <h1 className="text-xl font-bold">collectionname <span className='italic font-serif'>Collection</span></h1>

                <div className='flex justify-between items-end w-full'>
                    <div className='flex justify-center w-24 h-11 py-1 mt-8 px-4 border-solid border-2 bg-stone-900 text-stone-50 border-zinc-900'>
                        <h1 className="flex h-auto m-auto gap-1 text-xs font-bold">
                            $ <span className="text-xl leading-none">300</span> 00
                        </h1>
                    </div>

                    <RemoveButton />
                </div>
            </div>
        </div>
    )
}
export default CartCard;