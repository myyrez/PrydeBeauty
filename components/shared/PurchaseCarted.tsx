'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/db"
import { getServerSession } from "next-auth"

export default async function PurchaseCarted() {
    const session = await getServerSession(authOptions)
    const userIdToString: string = session?.user.id + ''
    
    try {
        await prisma.$transaction(async (tx) => {
            const cartProducts = await tx.userCarted.findMany({
                where: { 
                    userId: parseInt(userIdToString) 
                }
            })
            
            for (const product of cartProducts) {
                await tx.userPurchased.create({
                    data: {
                        userId: product.userId,
                        productId: product.productId
                    }
                })
            }
            
            await tx.userCarted.deleteMany({
                where: {
                    userId: parseInt(userIdToString)
                }
            })
        })
    } catch (error) {
        console.error('deu errado', error)
    }
}