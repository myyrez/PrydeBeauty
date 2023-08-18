import { BsArrowRightShort } from 'react-icons/bs'

export default function ShopButton() {
    return (
        <div className='flex justify-between justify-items-center mt-2 py-1 px-4 border-solid border-2 border-zinc-900'>
            <p className='h-auto text-xs leading-[30px] font-bold'>Shop this collection</p>
            <BsArrowRightShort className="text-3xl"/>
        </div>
    )
}