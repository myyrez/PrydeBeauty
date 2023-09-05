import Link from "next/link";
import { MdRemove } from 'react-icons/md'

export default function ShopButton() {
  return (
    <div className='flex justify-center w-fit h-11 py-1 px-4 border-solid border-2 border-zinc-900'>
        <p className='h-auto m-auto text-sm leading-[30px] font-bold'>Remove Product</p>
    </div>
  );
}
