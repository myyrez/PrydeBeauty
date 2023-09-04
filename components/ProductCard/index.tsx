'use client'

import React, { useState } from 'react'
import Image from "next/image"
import ShopButton from "../shared/ShopButton"
import WishlistButton from '../shared/WishlistButton'

type CardProps = {
    odd: boolean;
    imagePath: string;
}

const ProductCard: React.FunctionComponent<CardProps> = (props) => {
    const { odd, imagePath } = props;

    return (
        <div className={`${odd ? 'mt-11' : 'mt-0'} relative flex flex-col gap-1 w-56 text-zinc-900`}>

            <WishlistButton />
            
            <Image src={imagePath} height={400} width={300} alt='product card image' />
            <p className="text-xs font-bold uppercase">new shade</p>
            <p className="text-sm font-semibold uppercase">cheeks out freestyle cream blush</p>
            <p className="text-sm">X units remaining</p>
            <ShopButton />
        </div>
    )
}
export default ProductCard;