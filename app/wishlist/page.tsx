import React, { useState } from 'react'
import Navbar from "@/components/navbar";
import WishlistCard from '@/components/WishlistCard';
import prisma from '@/db';
import { Product } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function WishlistPage() {
    const products = await prisma.product.findMany()
    const session = await getServerSession(authOptions)
    const userIdToString: string = session?.user.id + ''

    const wishlists = await prisma.userWishlisted.findMany({
        where: {
            userId: parseInt(userIdToString)
        },
        include: {
            Product: true
        }
    })

    return (
        <div className="relative flex justify-center h-fit text-stone-900">
            <Navbar />
            <div className='absolute animate-spin-slow left-44 md:left-24 sm:left-24 sm:h-28 sm:w-28 inset-y-0 mx-auto my-auto mt-20 sm:mt-10 h-56 w-40 rounded-full z-0 bg-gradient-to-b from-orange-400 to-pink-600 blur-3xl'></div>

            <div className="flex z-20 flex-col w-4/5 md:w-full h-fit gap-6 p-4 mt-24 sm:mt-12 sm:pt-0 sm:mb-24">
                <h1 className="text-4xl">Your <span className='italic font-serif'>wishlist</span></h1>

                {wishlists.map(wishlist => (
                    <WishlistCard key={wishlist.id} {...{
                        id: wishlist.Product.id,
                        name: wishlist.Product.name,
                        collection: wishlist.Product.collection,
                        discountPercentage: wishlist.Product.discountPercentage,
                        listPrice: wishlist.Product.listPrice,
                        listPriceCents: wishlist.Product.listPriceCents,
                        unitsRemaining: wishlist.Product.unitsRemaining,
                    }}/>
                ))}
            </div>
        </div>
    )
}