'use client'
import { CiHeart } from "react-icons/ci"
import { useRouter } from "next/navigation"

export default function WishlistNavButton() {
    const router = useRouter()

    function goToWishlist() {
        router.replace('/wishlist')
        router.refresh()
    }

    return (
        <button onClick={goToWishlist}>
            <CiHeart className='text-2xl sm:text-zinc-50' />
        </button>
    )
}