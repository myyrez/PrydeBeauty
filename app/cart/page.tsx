import * as React from 'react';
import Navbar from '@/components/Navbar';
import WishlistCard from '@/components/WishlistCard';
import CartCard from '@/components/CartCard';
import ProductCard from '@/components/ProductCard';
import RemoveAllFromCart from '@/components/RemoveAllFromCartButton';
import prisma from '@/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import PurchaseProductsButton from '@/components/PurchaseProductsButton';

const CartPage = async () => {
    const session = await getServerSession(authOptions)
    const userIdToString: string = session?.user.id + ''
    var itemsPriceSum: number = 0
    var itemsCentsSum: number = 0
    var itemsSum: number = itemsPriceSum + (itemsCentsSum / 100)
    

    const products = await prisma.product.findMany()
    const carts = await prisma.userCarted.findMany({
        where: {
            userId: parseInt(userIdToString)
        },
        include: {
            Product: true
        }
    })

    carts.map(cart => { return itemsPriceSum += ((cart.Product.listPrice + (cart.Product.listPriceCents / 100)) - (((cart.Product.listPrice + (cart.Product.listPriceCents / 100)) * cart.Product.discountPercentage) / 100)) })
    carts.map(cart => { return itemsCentsSum += (cart.Product.listPriceCents - ((cart.Product.listPriceCents * cart.Product.discountPercentage) / 100)) })
    var newItemsCents: string = (itemsCentsSum / 100).toFixed(2)
    return (
        <div className='relative flex justify-center h-fit text-stone-900'>
            <Navbar />
            <div className='absolute animate-spin-slow left-16 inset-y-0 mx-auto my-auto mt-14 h-56 w-40 rounded-full z-0 bg-gradient-to-b from-blue-400 to-pink-600 blur-3xl'></div>
            <div className='absolute animate-spin-slow right-40 inset-y-0 mx-auto my-auto mt-14 h-44 w-20 rounded-full z-0 bg-gradient-to-b from-yellow-400 to-orange-600 blur-3xl'></div>

            <div className='flex z-20 w-[90%] h-fit justify-between gap-6 mt-24'>
                <div className='w-3/4 h-fit'>
                    <h1 className='text-2xl font-semibold italic font-serif pt-4'>Shopping Cart</h1>
                    {carts.map(cart => (
                        <CartCard key={cart.id} {...{
                            id: cart.Product.id,
                            name: cart.Product.name,
                            collection: cart.Product.collection,
                            discountPercentage: cart.Product.discountPercentage,
                            listPrice: cart.Product.listPrice,
                            listPriceCents: cart.Product.listPriceCents,
                            unitsRemaining: cart.Product.unitsRemaining,
                        }} />
                        
                    ))}

                    <div className='flex justify-between h-fit p-4 px-8 my-8 bg-stone-800/5 backdrop-blur-sm'>
                        <div className='flex items-center gap-4'>
                            <h1 className='text-2xl font-bold'>Estimated Total:</h1>

                            <h1 className="flex h-auto gap-1 text-sm font-bold">
                                $
                                <span className="text-2xl leading-none">
                                    {Math.floor(itemsPriceSum).toFixed(0)}
                                </span>
                                {itemsPriceSum.toFixed(2).split(".")[1]}
                            </h1>
                        </div>

                        <div className='flex items-center gap-8'>
                            <PurchaseProductsButton />

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