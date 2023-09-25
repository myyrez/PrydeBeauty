import Link from 'next/link'
import CartButton from "../shared/CartButton"
import { FaStarOfLife } from 'react-icons/fa'
import { CiSearch, CiUser, CiHeart, CiMenuFries, CiShoppingCart } from 'react-icons/ci'

export default function Navbar() {
    return (
        <nav className='fixed h-24 z-50 w-full flex justify-between items-center'>
            <div className='my-6 ml-20'>
                <Link href='/' className='text-zinc-900 font-semibold flex items-center gap-1'>
                    <span className='text-orange-500 mr-1'> <FaStarOfLife/> </span>
                    Pryde
                    <span className='font-bold'> Beauty </span>
                </Link>
            </div>
        
            <div className='my-6 mr-20 text-zinc-900 font-semibold flex gap-6 items-center'>
                <Link href='/collections'>Collections</Link>
                <div className='select-none'>.</div>
                <Link href='/wishlist'><CiHeart className='text-2xl' /></Link>
                <Link href='/account'><CiUser className='text-2xl' /></Link>
                <CartButton />
            </div>
        </nav>
    )
}