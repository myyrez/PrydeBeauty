'use client'

import React, { useState } from "react"
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'

type WishlistButtonProps = {
  id: number;
  isInWishlist: boolean;
  setWishlisted: (id: number, isInWishlist: boolean) => void
}

export default function WishlistButton({ id, isInWishlist, setWishlisted}: WishlistButtonProps)  {
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist)

  const addToWishlist = () => {
    if (!isWishlisted) {
      setIsWishlisted(true)
    }
      if (isWishlisted) setIsWishlisted(false)
  }

  return (
    <>
      <input type="checkbox" onClick={addToWishlist} defaultChecked={isInWishlist} onChange={e => setWishlisted(id, e.target.checked)} className="absolute hover:cursor-pointer bg-transparent right-3 top-3 border-none rounded-full w-14 h-14 appearance-none" />
      <div  className="absolute shadow-lg flex justify-center items-center bg-stone-900/10 backdrop-blur right-3 top-3 h-14 w-14 rounded-full pointer-events-none">
          { isWishlisted
              ? <LiaHeartSolid className="text-3xl text-orange-400 justify-center" />
              : <LiaHeart className="text-3xl text-stone-50 justify-center" />
          }
      </div>
    </>
  );
}