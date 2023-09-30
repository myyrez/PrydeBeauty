'use client'

import removeCarted from "./removeCarted";

type RemoveButtonProps = {
  id: number,
}

export default function RemoveButton({ id }: RemoveButtonProps) {

  function removeFromCart() {
    removeCarted(id)
  }

  return (
    <div onClick={removeFromCart} className='flex justify-center w-fit h-11 py-1 px-4 border-solid border-2 border-zinc-900 cursor-pointer'>
        <p className='h-auto m-auto text-sm leading-[30px] font-bold'>Remove Product</p>
    </div>
  );
}
