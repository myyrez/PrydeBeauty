import Link from 'next/link'
import CartButton from "../shared/CartButton"
import { FaStarOfLife } from 'react-icons/fa'
import { CiSearch, CiUser, CiHeart, CiMenuFries, CiShoppingCart } from 'react-icons/ci'
import WishlistNavButton from '../WishlistNavButton'

export default function Navbar() {
    return (
        <nav className='fixed sm:bottom-0 h-24 sm:h-20 z-50 w-full flex justify-between items-center sm:justify-around bg-zinc-50 sm:bg-zinc-950'>
            <div className='my-6 ml-20 sm:ml-0'>
                <Link href='/' className='text-zinc-900 font-semibold flex items-center sm:justify-center gap-1'>
                    <span className='text-orange-500 mr-1 sm:hidden'> <FaStarOfLife/> </span>
                    <span className='sm:hidden'>Pryde</span>
                    <span className='sm:hidden font-bold'> Beauty </span>
                </Link>
            </div>

            <div className='my-6 mr-20 sm:mr-0 sm:w-full text-zinc-900 font-semibold flex gap-10 sm:gap-0 sm:justify-evenly items-center'>
                <Link href='/' className='text-zinc-900 navbar:hidden font-semibold flex items-center sm:justify-center gap-1'>
                    <span className='text-orange-500 mr-1 sm:flex'> <FaStarOfLife/> </span>
                </Link>
                <Link href='/collections'><CiSearch className='text-2xl sm:text-zinc-50' /></Link>
                {/* <div className='select-none'>.</div> */}
                <WishlistNavButton />
                <Link href='/account'><CiUser className='text-2xl sm:text-zinc-50' /></Link>
                <CartButton />
            </div>
        </nav>
    )
}