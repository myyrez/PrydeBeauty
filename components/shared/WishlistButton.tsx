'use client'

import React, { useState } from "react"
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'

export default function WishlistButton() {
    const [isWishlisted, setIsWishlisted] = useState(true)

    const addToWishlist = () => {
        if (isWishlisted) setIsWishlisted(false)
        if (!isWishlisted) setIsWishlisted(true)
    }

  return (
    <div onClick={addToWishlist} className="absolute shadow-lg flex justify-center items-center bg-stone-900/10 backdrop-blur right-3 top-3 h-14 w-14 rounded-full hover:cursor-pointer">
        { isWishlisted
            ? <LiaHeart className="text-3xl text-stone-50 justify-center" />
            : <LiaHeartSolid className="text-3xl text-orange-400 justify-center" />
        }
    </div>
  );
}
