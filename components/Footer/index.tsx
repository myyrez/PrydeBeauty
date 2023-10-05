import Link from 'next/link'
import { FaStarOfLife, FaFigma, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
    return (
        <div className="w-full h-fit flex flex-col justify-center items-center bg-zinc-950 text-stone-50">
            <h1 className="text-4xl flex gap-2 py-16 items-center">
                <span className='text-pink-600 text-3xl'> <FaStarOfLife /> </span>
                Pryde 
                <span className="font-bold"> Beauty </span>
            </h1>

            <div className='grid grid-cols-3 gap-20 w-fit lg:gap-4 md:grid-cols-2 md:gap-14 sm:grid-cols-1'>
                <div className='flex flex-col gap-3 md:items-center'>
                    <h1 className='font-bold uppercase md:self-center'>Socials</h1>
                    <Link href='mailto:matheusfc2626@gmail.com' className='flex items-center gap-2 text-stone-400'><FiMail /> matheusfc2626@gmail.com </Link>
                    <Link href='https://www.linkedin.com/in/matheus-franco-carlos-07714b222/' className='flex items-center gap-2 text-stone-400'><FaLinkedin /> Matheus Franco Carlos </Link>
                    <Link href='https://github.com/myyrez' className='flex items-center gap-2 text-stone-400'><FaGithub /> myyrez </Link>
                </div>
                <div className='flex flex-col gap-3 md:items-center'>
                    <h1 className='font-bold uppercase md:self-center'>my other projects</h1>
                    <Link href='https://chronofight.netlify.app/' className='flex items-center gap-2 text-stone-400'> Chronofight </Link>
                    <Link href='https://spacemirror.netlify.app/' className='flex items-center gap-2 text-stone-400'> Mirror. </Link>
                </div>
                <div className='flex flex-col gap-3 md:items-center md:w-fit md:mx-auto md:col-span-2 sm:col-span-1'>
                    <h1 className='font-bold uppercase md:self-center'>Design by acholo aaron</h1>
                    <Link href='https://www.figma.com/@pryde' className='flex items-center gap-2 text-stone-400'><FaFigma /> Pryde </Link>
                    <Link href='https://www.instagram.com/he.is.aaron_' className='flex items-center gap-2 text-stone-400'><FaInstagram /> Aaron </Link>
                </div>
            </div>

            <div className='w-[90%] pt-16 sm:mb-24'>
                <div className='w-full h-px bg-zinc-800'/>
                <p className='py-8 text-sm'>2023 @ All rights reserved. Designed by Prydelabs. Developed by Matheus Franco</p>
            </div>
        </div>
    )
}