'use client'

import React, { useState } from 'react'
import Image from "next/image"
import ShopButton from "../shared/ShopButton"
import WishlistButton from '../shared/WishlistButton'

type PurchaseCardProps = {
    
}

const PurchaseCard: React.FunctionComponent<PurchaseCardProps> = (props) => {
    const {  } = props;

    return (
        <div className='w-96 h-fit my-2 p-4 bg-stone-400/5 backdrop-blur-sm'>
            <h1 className='text-xl font-semibold'>Product name</h1>
            <h1 className='text-xl font-semibold'>Mother Nature's Blessing <span className='italic font-serif'>Collection</span></h1>
        </div>
    )
}
export default PurchaseCard;