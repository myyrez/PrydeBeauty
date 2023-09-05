import * as React from 'react';
import Navbar from '@/components/Navbar';
import WishlistCard from '@/components/WishlistCard';
import CartCard from '@/components/CartCard';
import ProductCard from '@/components/ProductCard';

const CartPage = () => {
    return (
        <div className='relative flex justify-center h-fit text-stone-900'>
            <Navbar />

            <div className='flex w-[90%] h-fit justify-between gap-6 mt-24'>
                <div className='w-3/4 h-fit'>
                    <h1 className='text-2xl font-semibold italic font-serif pt-4'>Shopping Cart</h1>
                    <CartCard />
                    <CartCard />
                    <CartCard />

                    <div className='flex items-center gap-2 h-fit p-4 mt-8 bg-red-200'>
                        <h1 className='text-2xl font-bold'>Estimated Total:</h1>

                        <div className='flex justify-center w-24 h-11 py-1 px-4 border-solid border-2 bg-stone-900 text-stone-50 border-zinc-900'>
                            <h1 className="flex h-auto m-auto gap-1 text-xs font-bold">
                                $ <span className="text-xl leading-none">300</span> 00
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 items-center pb-4 w-1/4'>
                    <h1 className='text-2xl font-semibold italic font-serif pt-4'>Also Check</h1>
                    <ProductCard {...{ addMarginTop: false, imagePath: '/images/shade2.png'}} />
                    <ProductCard {...{ addMarginTop: false, imagePath: '/images/shade2.png'}} />
                </div>
            </div>
        </div>
    )
}
export default CartPage