import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { FaStar } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import { CiSearch, CiUser, CiHeart, CiMenuFries, CiShoppingCart } from 'react-icons/ci'

export default function Home() {
  return (
    <div className='relative text-zinc-900 h-screen flex gap-36 items-center flex-col '>

      <Navbar />

      {/* hero section */}
      <div className='relative flex flex-col mt-24 h-fit min-w-[48rem] z-10'>
        <Image className='absolute z-30 left-1/4 -translate-x-3/4' src='/images/heroImg3.png' height={240} width={190} alt='hero image 1'/>
        <Image className='absolute z-30 right-1/4 mt-24 translate-x-3/4' src='/images/heroImg4.png' height={320} width={180} alt='hero image 2'/>
        <div className='absolute inset-x-0 inset-y-0 mx-auto mt-36 h-28 w-28 -translate-x-8 rounded-full z-50 bg-zinc-50/40 backdrop-blur-sm'></div>
        <div className='absolute animate-spin-slow inset-x-0 inset-y-0 mx-auto mt-24 h-32 w-32 rounded-full z-0 bg-gradient-to-br from-orange-600 to-yellow-400 blur-xl'></div>

        <div className=''>
          <h1 className='text-9xl my-6 text-left text-zinc-900'>Beauty</h1>
          <h1 className='absolute z-40 text-9xl my-6 top-0 text-zinc-900 outline-text'>Beauty</h1>
          <h1 className='absolute text-9xl my-6 right-0 bottom-16 text-zinc-900'>Products</h1>
          <h1 className='absolute z-40 text-9xl my-6 right-0 bottom-16 text-zinc-900 outline-text'>Products</h1>
        </div>

        <div className='w-44'>
          <p className='my-4 text-zinc-900 mt-32 font-semibold'>Your skin is beautiful. Show it off.</p>
          <div className='w-full relative flex items-center'>
            <Link href='/collections' className='w-fit'>
              <p className=' text-zinc-900 font-bold flex items-center'>See all collections</p>
              <div className='h-px w-1/6 bg-zinc-900'></div>
            </Link>
            <BsArrowRightShort className='text-zinc-900 text-2xl ml-2' />
          </div>
        </div>
      </div>

      {/* featured collection section */}
      <div className='h-fit w-[90%] z-10'>
        <h1 className='text-4xl text-zinc-900'>Featured <span className='italic font-serif'>Collection</span></h1>
        <div className='flex justify-between py-10'>
          <ProductCard {...{ addMarginTop: true, imagePath: '/images/shade1.png'}} />
          <ProductCard {...{ addMarginTop: false, imagePath: '/images/shade2.png'}} />
          <ProductCard {...{ addMarginTop: true, imagePath: '/images/shade3.png'}} />
        </div>
      </div>

      {/* showing off section */}
      <div className='relative h-fit w-[90%] grid grid-cols-4 gap-8'>

        <h1 className='absolute z-0 top-12 left-24 text-6xl '>Flawlessly</h1>
        <h1 className='absolute z-40 top-12 left-24 text-6xl outline-text '>Flawlessly</h1>
        <h1 className='absolute top-12 left-40 text-7xl mt-16 '>Showing <span className='font-serif italic'>Off</span></h1>
        <h1 className='absolute z-40 top-12 left-40 text-7xl mt-16 outline-text '>Showing</h1>

        <div className='z-30'>
          <Image className='' src='/images/showoff3.png' height={240} width={280} alt='showoff image'/>
        </div>

        <div className='flex flex-col justify-end h-80 gap-4 col-span-2'>
          <p className='flex items-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt accusamus veniam officiis adipisci odit explicabo sunt dolores corrupti placeat!</p>
          <Link href='/about' className='w-fit'>
            <p className='font-bold flex items-center'>See more</p>
            <div className='h-px w-1/6 ease-in-out duration-300 bg-zinc-900'></div>
          </Link>
        </div>

        <div>
          <Image className='m-auto' src='/images/showoff2.png' height={180} width={180} alt='showoff video thumbnail'/>
        </div>
      </div>

      {/* exceptional section */}
      <div className='relative flex flex-col w-full gap-4 justify-center align-bottom'>
        <h1 className='absolute left-0 top-0 select-none text-stone-200 text-[10rem] text-left tracking-widest italic font-serif w-[50vw]'>Excep</h1>
        <h1 className='absolute right-0 top-44 select-none text-stone-200 text-[10rem] text-right tracking-widest italic font-serif w-[50vw] float-right'>tional</h1>
        
        <Image className='inset-x-0 inset-y-0 mx-auto z-30 select-none' src='/images/cream2.png' height={300} width={350} alt='showoff video thumbnail'/>
        <div className='absolute inset-x-0 inset-y-0 mx-auto mt-24 h-96 w-96 rounded-full z-20 bg-gradient-to-b from-yellow-400 to-stone-50 blur-2xl'></div>

        <div className='w-full text-center align-center'>
          <h1 className='text-5xl'>Our best seller from <span className='italic font-serif'>Time to Still</span></h1>
          <Link href='/product' className='flex justify-center w-56 m-auto mt-12 py-1 px-4 border-solid border-2 border-zinc-900'>
            <p className='h-auto text-sm leading-[30px] font-bold'>Shop this product</p>
          </Link>
        </div>
      </div>

      {/* testimonials section */}
      <div className='h-fit w-[90%] z-10 flex flex-col gap-8'>
        <h1 className='text-4xl'>Our <span className='italic font-serif'>testimonials</span></h1>

        <div className='grid grid-cols-4 gap-8'>
          <div>
            <h1 className='font-bold text-xs uppercase mb-1'>Sophia Anderson</h1>
            <p className='text-sm'>The mascara is a game-changer - my lashes have never looked so long and voluminous!</p>
            <div className='flex gap-2 mt-4'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
          </div>
          <div>
            <h1 className='font-bold text-xs uppercase mb-1'>Olivia Wells</h1>
            <p className='text-sm'>I can't believe how smooth my skin feels after using this amazing serum.</p>
            <div className='flex gap-2 mt-4'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
          </div>
          <div>
            <h1 className='font-bold text-xs uppercase mb-1'>Isabella Turner</h1>
            <p className='text-sm'>This lipstick stays put all day, and the color selection is fantastic.</p>
            <div className='flex gap-2 mt-4'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
          </div>
          <div>
            <h1 className='font-bold text-xs uppercase mb-1'>Mia Harrison</h1>
            <p className='text-sm'>This skincare product gave me a radiant glow in just days! I'm in love!</p>
            <div className='flex gap-2 mt-4'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}
