import React, { useState } from 'react'
import Image from "next/image"
import ShopButton from "../shared/ShopButton"
import WishlistButton from '../shared/WishlistButton'
import prisma from '@/db'
import setWishlisted from '@/components/shared/setWishlisted'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

type CardProps = {
    addMarginTop: boolean;
    imagePath: string;
    id: number;
    name: string;
    collection: string;
    discountPercentage: number;
    listPrice: number;
    listPriceCents: number;
    unitsRemaining: number;
}

const ProductCard: React.FC<CardProps> = async (props) => {
    const { 
        addMarginTop, 
        imagePath,
        id,
        name, 
        collection,
        discountPercentage, 
        listPrice, 
        listPriceCents, 
        unitsRemaining,
    } = props;

    let productPriceSum = listPrice + ((listPriceCents/100))
    let discountedPrice = (productPriceSum - ((productPriceSum * discountPercentage) / 100)).toFixed(2)
    let newProductPrice = productPriceSum.toFixed(2)

    var isProductWishlisted: boolean
    const session = await getServerSession(authOptions)
    const userIdToString: string = session?.user.id + ''
    if (session == undefined) {
        isProductWishlisted = false
    } else {
        const checkIfProductWishlisted = await prisma.userWishlisted.findMany({
            where: { productId: id, userId: parseInt(userIdToString) }
        })
    
        if (checkIfProductWishlisted.length == 0) {
            isProductWishlisted = false
        } else {
            isProductWishlisted = true
        }
    }



    return (
        <div className={`${addMarginTop ? 'mt-11' : 'mt-0'} relative flex flex-col gap-1 w-60 text-zinc-900`}>
            
            <WishlistButton setWishlisted={setWishlisted} {...{ id, isProductWishlisted }} />
            
            <Image src={`/images/${id}.jpg`} height={400} width={300} alt='product card image' />
            <div className='flex gap-2'>
                {discountPercentage > 0
                    ? <p className="text-base font-extrabold uppercase">${discountedPrice}</p>
                    : <p className="text-base font-extrabold uppercase">${newProductPrice}</p>
                }
                
                {discountPercentage > 0 
                    ? <p className='text-base font-bold text-red-500'>-{discountPercentage}% off</p>
                    : <p className='hidden'></p>
                }
            </div>
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-sm font-semibold italic">{collection}</p>
            <p className="text-sm">{unitsRemaining} units remaining</p>
            <ShopButton id={id} />
        </div>
    )
}
export default ProductCard;