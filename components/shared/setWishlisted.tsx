'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/db"
import { getServerSession } from "next-auth"

export default async function setWishlisted(id: number, isInWishlist: boolean) {
    const session = await getServerSession(authOptions)
    if (session == undefined) return
    const userIdToString: string = session?.user.id + ''
    var isAlreadyWishlisted: boolean
    
    const checkWishlisted = await prisma.userWishlisted.findMany({
        where: {
            userId: parseInt(userIdToString),
            productId: id
        },
    })
    
    if (checkWishlisted.length == 0) {
        isAlreadyWishlisted = false
    } else {
        isAlreadyWishlisted = true
    }
    
    if (isAlreadyWishlisted == false) {
        await prisma.userWishlisted.create({
            data: {
                User: {
                    connect: { id: parseInt(userIdToString) }
                },
                Product: {
                    connect: { id: id }
                }
            }
        })
    } else {
        await prisma.userWishlisted.deleteMany({
            where: {
                userId: parseInt(userIdToString),
                productId: id
            }
        })
    }
}