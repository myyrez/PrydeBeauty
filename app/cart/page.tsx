import * as React from 'react';
import Navbar from '@/components/Navbar';
import WishlistCard from '@/components/WishlistCard';
import CartCard from '@/components/CartCard';
import ProductCard from '@/components/ProductCard';
import RemoveAllFromCart from '@/components/RemoveAllFromCartButton';
import prisma from '@/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const CartPage = async () => {
    const session = await getServerSession(authOptions)
    const userIdToString: string = session?.user.id + ''

    const products = await prisma.product.findMany()
    const carts = await prisma.userCarted.findMany({
        where: {
            userId: parseInt(userIdToString)
        }
    })

    return (
        <div className='relative flex justify-center h-fit text-stone-900'>
            <Navbar />
            <div className='absolute animate-spin-slow left-16 inset-y-0 mx-auto my-auto mt-14 h-56 w-40 rounded-full z-0 bg-gradient-to-b from-blue-400 to-pink-600 blur-3xl'></div>
            <div className='absolute animate-spin-slow right-40 inset-y-0 mx-auto my-auto mt-14 h-44 w-20 rounded-full z-0 bg-gradient-to-b from-yellow-400 to-orange-600 blur-3xl'></div>

            <div className='flex z-20 w-[90%] h-fit justify-between gap-6 mt-24'>
                <div className='w-3/4 h-fit'>
                    <h1 className='text-2xl font-semibold italic font-serif pt-4'>Shopping Cart</h1>
                    {carts.map(cart => (
                        products.map(product => (
                            <CartCard key={cart.id} {...{
                                id: product.id,
                                name: product.name,
                                collection: product.collection,
                                discountPercentage: product.discountPercentage,
                                listPrice: product.listPrice,
                                listPriceCents: product.listPriceCents,
                                unitsRemaining: product.unitsRemaining,
                            }} />
                        ))
                    ))}

                    <div className='flex justify-between h-fit p-4 px-8 mt-8 bg-stone-800/5 backdrop-blur-sm'>
                        <div className='flex items-center gap-4'>
                            <h1 className='text-2xl font-bold'>Estimated Total:</h1>

                            <h1 className="flex h-auto gap-1 text-xs font-bold">
                                $ <span className="text-xl leading-none">300</span> 00
                            </h1>
                        </div>

                        <div className='flex items-center gap-8'>
                            <div className='flex justify-center w-24 h-11 py-1 px-4 border-solid border-2 bg-stone-900 text-stone-50 border-zinc-900'>
                                <h1 className='flex h-auto m-auto gap-1 font-bold text-zinc-50'>Purchase</h1>
                            </div>

                            <RemoveAllFromCart />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 items-center pb-4 w-1/4'>
                    <h1 className='text-2xl font-semibold italic font-serif pt-4'>Also Check</h1>
                    {/* <ProductCard {...{ addMarginTop: false, imagePath: '/images/shade2.png'}} />
                    <ProductCard {...{ addMarginTop: false, imagePath: '/images/shade2.png'}} /> */}
                </div>
            </div>
        </div>
    )
}
export default CartPage