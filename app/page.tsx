import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import { FaStarOfLife } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import { CiSearch, CiUser, CiHeart, CiMenuFries, CiShoppingCart } from 'react-icons/ci'

export default function Home() {
  return (
    <div className='relative h-screen overflow-y-scroll flex gap-4 items-center flex-col '>

      <Navbar />
      {/* oi */}
      {/* hero section */}
      <div className='relative flex flex-col mt-24 h-fit min-w-[48rem] z-10'>
        <Image className='absolute left-1/4 -translate-x-3/4' src='/images/heroImg1.png' height={240} width={190} alt='hero image 1'/>
        <Image className='absolute right-1/4 mt-24 translate-x-3/4' src='/images/heroImg2.png' height={320} width={180} alt='hero image 2'/>
        <div className='absolute inset-x-0 inset-y-0 mx-auto mt-36 h-28 w-28 -translate-x-8 rounded-full z-30 bg-zinc-50/40 backdrop-blur-sm'></div>
        <div className='absolute inset-x-0 inset-y-0 mx-auto mt-24 h-32 w-32 rounded-full z-0 bg-gradient-to-br from-orange-600 to-yellow-400 blur-xl'></div>

        <div className='z-20'>
          <h1 className='text-9xl my-6 text-left text-zinc-900'>Beauty</h1>
          <h1 className='text-9xl my-6 text-right text-zinc-900'>Products</h1>
        </div>

        <div className='w-44'>
          <p className='my-4 text-zinc-900 font-semibold'>Your skin is beautiful. Show it off.</p>
          <div className='w-full relative flex items-center'>
            <div>
              <p className=' text-zinc-900 font-bold flex items-center'>See all products</p>
              <div className='h-px w-30 bg-zinc-900'></div>
            </div>
            <BsArrowRightShort className='text-zinc-900 text-2xl ml-2' />
          </div>
        </div>
      </div>

      {/* featured collection section */}
      <div className='h-fit w-4/5 mx-[5%] z-10'>
        <h1 className='text-4xl text-zinc-900'>Featured Collection</h1>
      </div>

    </div>
  )
}
