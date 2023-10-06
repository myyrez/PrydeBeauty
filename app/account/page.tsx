import * as React from 'react';
import Navbar from '@/components/navbar';
import PurchaseCard from '@/components/PurchaseCard';
import prisma from '@/db';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { signOut } from 'next-auth/react'
import { LogoutButton } from '../auth';

function getUsers() {
    return prisma.user.findMany()
}

const AccountPage = async () => {
    const session = await getServerSession(authOptions)
    const userIdToString: string = session?.user.id + ''

    if (!session) {
        redirect('/api/auth/signin')
    }

    const users = await getUsers()
    const purchases = await prisma.userPurchased.findMany({
        where: {
            userId: parseInt(userIdToString)
        },
        include: {
            product: true
        }
    })

    return (
        <div className='relative flex justify-center h-fit text-stone-900'>
            <Navbar />
            <div className='absolute animate-spin-slow inset-x-0 inset-y-0 mx-auto mt-20 sm:mt-8 h-28 w-28 rounded-full z-0 bg-gradient-to-br from-pink-600 to-blue-400 blur-2xl'></div>

            {users.filter(user => user.username === session.user?.email).map(user => (
                <div key={user.id} className='flex flex-col z-20 w-[90%] h-fit items-center mt-24 sm:mt-12 gap-16'>
                        
                    <h1 className='font-bold text-4xl sm:text-3xl text-center'>{user.name}'s <span className='italic font-serif'>Account</span></h1>

                    <div className='flex items-start w-full md:flex-col md:gap-12'>
                        <div className='flex flex-col md:mx-auto gap-4 w-1/2 items-center justify-center'>
                            <h1 className='font-bold text-2xl text-center'>Name: <span>{user.name}</span></h1>
                            <h1 className='font-bold text-2xl text-center'>Email: <span>{user.username}</span></h1>
                            
                            <LogoutButton />
                        </div>

                        <div className='flex md:mx-auto md:mb-24 gap-4 w-1/2 md:w-full justify-center'>
                            <div className='flex flex-col items-center w-full h-fit'>
                                <h1 className='font-bold text-2xl'>Your purchases</h1>
                                {purchases.map(purchase => (
                                    <PurchaseCard key={purchase.id} {...{
                                        name: purchase.product.name,
                                        collection: purchase.product.collection
                                    }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default AccountPage