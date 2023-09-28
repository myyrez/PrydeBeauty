'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/db"
import { getServerSession } from "next-auth"

export default async function setWishlisted(id: number, isInWishlist: boolean) {
    await prisma.product.update({
        where: { id },
        data: {  }
    })
}