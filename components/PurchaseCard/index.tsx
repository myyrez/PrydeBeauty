import React, { useState } from 'react'
import Image from "next/image"
import ShopButton from "../shared/ShopButton"
import WishlistButton from '../shared/WishlistButton'

type PurchaseCardProps = {
    name: string,
    collection: string
}

const PurchaseCard: React.FunctionComponent<PurchaseCardProps> = (props) => {
    const { name, collection } = props;

    return (
        <div className='flex flex-col gap-4 w-96 sm:w-full h-fit my-2 p-4 bg-stone-400/5 backdrop-blur-sm'>
            <h1 className='text-xl font-bold'>{name}</h1>
            <h1 className='text-xl font-semibold'>{collection} <span className='italic font-serif'>Collection</span></h1>
        </div>
    )
}
export default PurchaseCard;