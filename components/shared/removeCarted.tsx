'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/db"
import { getServerSession } from "next-auth"

export default async function removeCarted(id: number | null) {
    const session = await getServerSession(authOptions)
    if (session == undefined) return
    const userIdToString: string = session?.user.id + ''
    
    if (id !== null) {
        await prisma.userCarted.deleteMany({
            where: {
                userId: parseInt(userIdToString),
                productId: id
            }
        })
        console.log('remove specific from carted')
    } else {
        await prisma.userCarted.deleteMany({
            where: {
                userId: parseInt(userIdToString)
            }
        })
        console.log('remove all from carted')
    }
}