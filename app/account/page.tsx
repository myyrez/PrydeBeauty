import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PurchaseCard from '@/components/PurchaseCard';

const AccountPage = () => {
    return (
        <div className='relative flex justify-center h-fit text-stone-900'>
            <Navbar />
            <div className='absolute animate-spin-slow inset-x-0 inset-y-0 mx-auto mt-20 h-28 w-28 rounded-full z-0 bg-gradient-to-br from-pink-600 to-blue-400 blur-2xl'></div>

            <div className='flex flex-col z-20 w-[90%] h-fit items-center mt-24 gap-16'>
                <h1 className='font-bold text-4xl'>Name's <span className='italic font-serif'>Account</span></h1>

                <div className='flex items-start w-full'>
                    <div className='flex flex-col gap-4 w-1/2 items-center justify-center'>
                        <h1 className='font-bold text-2xl'>Name: <span>accountname</span></h1>
                        <h1 className='font-bold text-2xl'>Credential: <span>accountcredential</span></h1>
                    </div>

                    <div className='flex gap-4 w-1/2 justify-center'>
                        <div className='flex flex-col items-center w-full h-fit'>
                            <h1 className='font-bold text-2xl'>Your purchases</h1>

                            <PurchaseCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountPage