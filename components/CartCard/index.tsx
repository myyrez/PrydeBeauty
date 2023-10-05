import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RemoveButton from '@/components/shared/RemoveButton'
import { FaStar } from 'react-icons/fa';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/db';

type CartCardProps = {
    id: number,
    name: string;
    collection: string;
    discountPercentage: number;
    listPrice: number;
    listPriceCents: number;
    unitsRemaining: number;
}

const CartCard: React.FunctionComponent<CartCardProps> = async (props) => {
    const {
        id,
        name, 
        collection,
        discountPercentage, 
        listPrice, 
        listPriceCents, 
        unitsRemaining,
    } = props;

    const session = await getServerSession(authOptions)
    if (session == undefined) return
    const userIdToString: string = session?.user.id + ''
    var isProductCarted: boolean

    const checkIfProductCarted = await prisma.userCarted.findMany({
        where: { productId: id, userId: parseInt(userIdToString) }
    })

    if (checkIfProductCarted.length == 0) {
        isProductCarted = false
    } else {
        isProductCarted = true
    }

    let productPriceSum = listPrice + ((listPriceCents/100))
    let discountedPrice = Math.floor(productPriceSum - ((productPriceSum * discountPercentage) / 100))
    let discountedCents = (productPriceSum - ((productPriceSum * discountPercentage) / 100)).toFixed(2)

    return (
        <div className="relative flex w-full items-start gap-2 my-4 h-[200px] bg-stone-400/5 backdrop-blur-sm">
            <Image src={`/images/${id}.jpg`} height={200} width={150} alt='product card image' />
            <div className="flex flex-col justify-center h-full w-full p-2 gap-2">
                <Link href={`/product/${id}`} className='w-fit'>
                    <h1 className="text-xl font-bold">
                        {name}
                        <div className='h-px w-1/6 ease-in-out duration-300 bg-zinc-900'></div>
                    </h1>
                </Link>

                <h1 className="text-xl font-bold">{collection} <span className='italic font-serif'>Collection</span></h1>

                <div className='flex justify-between items-end w-full'>
                    {discountPercentage > 0
                        ?   <div className='flex justify-center w-24 h-11 py-1 mt-8 px-4 border-solid border-2 bg-stone-900 text-stone-50 border-zinc-900'>
                                <h1 className="flex h-auto m-auto gap-1 text-xs font-bold">
                                    $ <span className="text-xl leading-none">{discountedPrice}</span> {discountedCents.split('.')[1]}
                                </h1>
                            </div>

                        :   <div className='flex justify-center w-24 h-11 py-1 mt-8 px-4 border-solid border-2 bg-stone-900 text-stone-50 border-zinc-900'>
                                <h1 className="flex h-auto m-auto gap-1 text-xs font-bold">
                                    $ <span className="text-xl leading-none">{listPrice}</span> {listPriceCents}
                                </h1>
                            </div>
                    }

                    <RemoveButton {...{id: id}} />
                </div>
            </div>
        </div>
    )
}
export default CartCard;