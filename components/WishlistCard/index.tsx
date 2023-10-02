import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WishlistButton from '../shared/WishlistButton';
import { FaStar } from 'react-icons/fa';
import setWishlisted from '@/components/shared/setWishlisted'
import prisma from '@/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

type WishlistCardProps = {
    id: number,
    name: string;
    collection: string;
    discountPercentage: number;
    listPrice: number;
    listPriceCents: number;
    unitsRemaining: number;
}

const WishlistCard: React.FunctionComponent<WishlistCardProps> = async (props) => {
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
    var isProductWishlisted: boolean

    const checkIfProductWishlisted = await prisma.userWishlisted.findMany({
        where: { productId: id, userId: parseInt(userIdToString) }
    })

    if (checkIfProductWishlisted.length == 0) {
        isProductWishlisted = false
    } else {
        isProductWishlisted = true
    }

    let productPriceSum = listPrice + ((listPriceCents/100))
    let discountedPrice = Math.floor(productPriceSum - ((productPriceSum * discountPercentage) / 100))
    let discountedCents = (productPriceSum - ((productPriceSum * discountPercentage) / 100)).toFixed(2)

    return (
        <div className="relative flex w-full items-start gap-2 my-1 h-[200px] bg-stone-400/5 backdrop-blur-sm">
            <WishlistButton setWishlisted={setWishlisted} {...{ id, isProductWishlisted }} />

            <Image src='/images/shade1.png' height={200} width={150} alt='product card image' />
            <div className="flex flex-col justify-between w-fit p-2 gap-2">
                <Link href={`/product/${id}`} className='w-fit'>
                    <h1 className="text-xl font-bold">
                        {name}
                        <div className='h-px w-1/6 ease-in-out duration-300 bg-zinc-900'></div>
                    </h1>
                </Link>
                <h1 className="text-xl font-bold">{collection} <span className='italic font-serif'>Collection</span></h1>
                <div className="flex gap-2  mt-2 items-center">
                    <p>Overall reviews:</p>
                    <div className='flex gap-1 items-center font-semibold'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
                </div>
                <h1 className="font-semibold text-lg text-green-700">In stock</h1>
            </div>

            <div className='flex absolute right-4 bottom-8 justify-center w-36 h-11 mx-auto py-1 px-4 border-solid border-2 border-zinc-900'>
                <p className='h-auto m-auto text-sm leading-[30px] font-bold'>Add to Cart</p>
            </div>
            {discountPercentage > 0 
                ?   <div className='flex absolute right-40 bottom-8 justify-center w-24 h-11 mx-auto py-1 px-4 border-solid border-2 bg-stone-900 text-stone-50 border-zinc-900'>
                        <h1 className="flex h-auto m-auto gap-1 text-xs font-bold">
                            $ <span className="text-xl leading-none">{discountedPrice}</span> {discountedCents.split('.')[1]}
                        </h1>
                    </div>

                :   <div className='flex absolute right-40 bottom-8 justify-center w-24 h-11 mx-auto py-1 px-4 border-solid border-2 bg-stone-900 text-stone-50 border-zinc-900'>
                        <h1 className="flex h-auto m-auto gap-1 text-xs font-bold">
                            $ <span className="text-xl leading-none">{listPrice}</span> {listPriceCents}
                        </h1>
                    </div>
            }

        </div>
    )
}
export default WishlistCard;