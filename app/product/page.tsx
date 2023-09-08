'use client'

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaStar } from "react-icons/fa";
import WishlistButton from "@/components/shared/WishlistButton";

export default function ProductPage() {
  return (
    <div className="relative text-zinc-900 h-fit flex gap-36 items-center flex-col">
      <Navbar />

      <div className="flex gap-8 justify-between h-fit mt-24 w-[90%] z-10">
        <div className="w-80">
            <Image src='/images/shade1.png' height={400} width={350} alt='product card image' />
        </div>

        <div className="flex flex-col gap-2 w-2/5 p-4">
          <h1 className="text-2xl font-semibold">Product name</h1>
          <h1 className="text-2xl font-semibold">Collectionname <span className="italic font-serif">Collection</span></h1>
          <div className='flex gap-1 mt-2 items-center font-semibold'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>

          <h1 className="flex gap-1 text-sm mt-6 font-bold">
            $ <span className="text-3xl leading-none">300</span> 00
          </h1>
          <p className="text-sm">list price: $399.99</p>

          <h1 className="font-bold mt-4">Product description</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi ex sequi veritatis perspiciatis pariatur? Officia vitae quaerat fugit sed laborum, doloribus, quae ullam tempore, sunt excepturi pariatur nobis a!</p>
        </div>

        <div className="relative flex flex-col gap-6 w-80 p-4 h-fit">
          <h1 className="flex gap-1 text-sm font-bold">
            $ <span className="text-3xl leading-none">300</span> 00
          </h1>

          <p className="text-sm">Delivery <span className="font-bold">Friday, September 15</span></p>

          <h1 className="font-semibold text-lg text-green-700">In stock</h1>

          <div className="flex gap-2">
            <h1>Quantity:</h1>

            <select className="w-fit border border-stone-900 focus:outline-none hover:cursor-pointer">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className='flex justify-center w-4/5 m-auto mt-4 py-1 px-4 border-solid border-2 border-zinc-900'>
            <p className='h-auto text-sm leading-[30px] font-bold'>Add to Cart</p>
          </div>

          <WishlistButton />

        </div>
      </div>
    </div>
  );
}
