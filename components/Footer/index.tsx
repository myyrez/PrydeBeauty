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

            <div className='grid grid-cols-3 gap-4 w-9/12'>
                <div>
                    <h1 className='font-bold uppercase'>Socials</h1>
                    <Link href='https://www.linkedin.com/in/matheus-franco-carlos-07714b222/' className='flex items-center gap-2 text-stone-400'><FaLinkedin /> Matheus Franco Carlos </Link>
                    <Link href='https://github.com/myyrez' className='flex items-center gap-2 text-stone-400'><FaGithub /> myyrez </Link>
                    <Link href='mailto:matheusfc2626@gmail.com' className='flex items-center gap-2 text-stone-400'><FiMail /> matheusfc2626@gmail.com </Link>
                </div>
                <div>
                    <h1 className='font-bold uppercase'>my other projects</h1>
                </div>
                <div>
                    <h1 className='font-bold uppercase'>Figma Design by acholo aaron</h1>
                    <Link href='https://www.figma.com/@pryde' className='flex items-center gap-2 text-stone-400'><FaFigma /> Pryde </Link>
                    <Link href='https://www.figma.com/@pryde' className='flex items-center gap-2 text-stone-400'><FaInstagram /> Aaron </Link>
                </div>
            </div>
        </div>
    )
}