'use client'

import removeCarted from "./removeCarted";
import { useRouter } from "next/navigation";

type RemoveButtonProps = {
  id: number,
}

export default function RemoveButton({ id }: RemoveButtonProps) {
  const router = useRouter()
  
  function removeFromCart() {
    removeCarted(id)
    router.refresh()
  }

  return (
    <div onClick={removeFromCart} className='flex justify-center w-fit h-11 py-1 px-4 border-solid border-2 border-zinc-900 cursor-pointer'>
        <p className='h-auto m-auto whitespace-nowrap text-sm leading-[30px] font-bold'>Remove Product</p>
    </div>
  );
}
