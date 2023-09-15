import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'

type ShopButtonProps = {
    id: number;
}

export default function ShopButton({ id }: ShopButtonProps) {
    return (
        <Link href={`/product/${id}`} className='flex justify-between justify-items-center mt-2 py-1 px-4 border-solid border-2 border-zinc-900'>
            <p className='h-auto text-xs leading-[30px] font-bold'>Shop this product</p>
            <BsArrowRightShort className="text-3xl"/>
        </Link>
    )
}