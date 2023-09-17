'use server'
import prisma from "@/db"

export default async function setWishlisted(id: number, isInWishlist: boolean) {
    await prisma.product.update({
        where: { id },
        data: { isInWishlist }
    })
}