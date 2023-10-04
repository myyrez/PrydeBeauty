import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaStar } from "react-icons/fa";
import WishlistButton from "@/components/shared/WishlistButton";
import prisma from "@/db";
import setWishlisted from '@/components/shared/setWishlisted'
import AddToCartButton from "@/components/AddToCartButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProductPage({ 
  params: { productId },
}: {
  params: {
    productId: string
  }
}) {

  const product = await prisma.product.findUniqueOrThrow({
    where: {id: parseInt(productId)}
  })

  

  let productPriceSum = product.listPrice + ((product.listPriceCents/100))
  let discountedPrice = Math.floor(productPriceSum - ((productPriceSum * product.discountPercentage) / 100))
  let discountedCents = (productPriceSum - ((productPriceSum * product.discountPercentage) / 100)).toFixed(2)
  let newProductCents = productPriceSum.toFixed(2)
  let newProductPrice = productPriceSum.toFixed(0)

  let productQuantity = product.unitsRemaining
  const quantityArr = []

  for (let i = 1; i <= productQuantity; i++) {
    quantityArr.push(<option key={i} value={i}>{i}</option>)
  }

  var isProductCarted: boolean
  var isProductWishlisted: boolean
  const session = await getServerSession(authOptions)
  const userIdToString: string = session?.user.id + ''
  if (session == undefined) {
    isProductCarted = false
    isProductWishlisted = false
  } else {
    const checkIfProductWishlisted = await prisma.userWishlisted.findMany({
      where: { productId: product.id, userId: parseInt(userIdToString) }
    })
  
    if (checkIfProductWishlisted.length == 0) {
      isProductWishlisted = false
    } else {
      isProductWishlisted = true
    }
  
    const checkIfProductCarted = await prisma.userCarted.findMany({
      where: { productId: product.id, userId: parseInt(userIdToString) }
    })
  
    if (checkIfProductCarted.length == 0) {
      isProductCarted = false
    } else {
      isProductCarted = true
    }
  }


  return (
    <div className="relative text-zinc-900 h-fit flex gap-36 items-center flex-col">
      <Navbar />

      <div className="flex gap-8 justify-between h-fit mt-24 w-[90%] z-10">
        <div className="w-80">
            <Image src='/images/shade1.png' height={400} width={350} alt='product card image' />
        </div>

        <div className="flex flex-col gap-2 w-2/5 p-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <h1 className="text-2xl font-semibold">{product.collection} <span className="italic font-serif">Collection</span></h1>
          <div className='flex gap-1 mt-2 items-center font-semibold'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>

          {product.discountPercentage > 0
            ? 
            <div className="flex gap-6 items-center">
              <h1 className="flex gap-1 text-sm my-3 font-bold">
                $ <span className="text-3xl leading-none">{discountedPrice}</span> {discountedCents.split('.')[1]}
              </h1>
              <h1 className="text-2xl font-bold text-red-500">-{product.discountPercentage}% off</h1>
            </div>
              
            : 
            <div className="flex gap-6 items-center">
              <h1 className="flex gap-1 text-sm my-3 font-bold">
                $ <span className="text-3xl leading-none">{product.listPrice}</span> {product.listPriceCents}
              </h1>
            </div>
          }

          <p className="text-sm font-semibold">List price: ${product.listPrice}.{product.listPriceCents}</p>

          <h1 className="font-bold mt-4">Product description</h1>
          <p className="text-sm">{product.description}</p>
        </div>

        <div className="relative flex flex-col gap-6 w-80 p-4 h-fit">
          {product.discountPercentage > 0
            ?
            <h1 className="flex gap-1 text-sm my-3 font-bold">
              $ <span className="text-3xl leading-none">{discountedPrice}</span> {discountedCents.split('.')[1]}
            </h1>

            :
            <h1 className="flex gap-1 text-sm font-bold">
              $ <span className="text-3xl leading-none">{product.listPrice}</span> {product.listPriceCents}
            </h1>
          }

          <p className="text-sm">Delivery <span className="font-bold">Friday, September 15</span></p>

          <h1 className="font-semibold text-lg text-green-700">In stock</h1>

          <div className="flex gap-2">
            <h1>Quantity:</h1>

            <select className="w-fit border border-stone-900 focus:outline-none hover:cursor-pointer">
              {quantityArr}
            </select>
          </div>

          <AddToCartButton {...{pageProductId: product.id, isProductCarted}} />

          <WishlistButton setWishlisted={setWishlisted} {...{
            id: product.id, 
            isProductWishlisted
          }} />

        </div>
      </div>
    </div>
  );
}
