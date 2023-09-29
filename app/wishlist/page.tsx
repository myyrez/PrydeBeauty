import React, { useState } from 'react'
import Navbar from "@/components/Navbar";
import WishlistCard from '@/components/WishlistCard';
import prisma from '@/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function WishlistPage() {
    const products = await prisma.product.findMany()
    const session = await getServerSession(authOptions)
    const userIdToString: string = session?.user.id + ''

    const wishlists = await prisma.userWishlisted.findMany({
        where: {
            userId: parseInt(userIdToString)
        }
    })

    return (
        <div className="relative flex justify-center h-fit text-stone-900">
            <Navbar />
            <div className='absolute animate-spin-slow left-44 inset-y-0 mx-auto my-auto mt-20 h-56 w-40 rounded-full z-0 bg-gradient-to-b from-orange-400 to-pink-600 blur-3xl'></div>

            <div className="flex z-20 flex-col w-4/5 h-fit gap-6 p-4 mt-24">
                <h1 className="text-4xl">Your <span className='italic font-serif'>wishlist</span></h1>
                <input placeholder='Search by name or collection' className='w-96 p-3 border-2 border-zinc-900 focus:outline-none'/>

                {wishlists.map(wishlist => (
                    products.map(product => (
                        <WishlistCard key={wishlist.id} {...{
                            id: product.id,
                            name: product.name,
                            collection: product.collection,
                            discountPercentage: product.discountPercentage,
                            listPrice: product.listPrice,
                            listPriceCents: product.listPriceCents,
                            unitsRemaining: product.unitsRemaining,
                        }}/>
                    ))
                ))}
            </div>
        </div>
    )
}