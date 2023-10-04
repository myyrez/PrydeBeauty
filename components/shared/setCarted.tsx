'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/db"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function setCarted(id: number) {
    const session = await getServerSession(authOptions)
    if (session == undefined) redirect('/api/auth/signin')
    const userIdToString: string = session?.user.id + ''

    var isAlreadyCarted: boolean
    
    const checkCarted = await prisma.userCarted.findMany({
        where: {
            userId: parseInt(userIdToString),
            productId: id
        },
    })
    
    if (checkCarted.length == 0) {
        isAlreadyCarted = false
    } else {
        isAlreadyCarted = true
    }
    
    if (isAlreadyCarted == false) {
        await prisma.userCarted.create({
            data: {
                User: {
                    connect: { id: parseInt(userIdToString) }
                },
                Product: {
                    connect: { id: id }
                }
            }
        })
    }
}