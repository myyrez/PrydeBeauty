'use client'

import PurchaseCarted from "../shared/PurchaseCarted";
import { useRouter } from "next/navigation";

export default function PurchaseProductsButton() {
  const router = useRouter()

  function callPurchase() {
    PurchaseCarted()
    router.refresh()
  }

  return (
    <div onClick={callPurchase} className='flex justify-center w-24 h-11 py-1 px-4 border-solid border-2 bg-stone-900 text-stone-50 border-zinc-900 cursor-pointer'>
      <h1 className='flex h-auto m-auto gap-1 font-bold text-zinc-50'>Purchase</h1>
    </div>
  );
}