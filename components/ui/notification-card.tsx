import React from 'react';
import SmallCard from './smallcard';
import profile from '../../images/profile.jpg';
import Image from 'next/image';
import Link from 'next/link';


const NotificationCard = () => {
    return (
        <div className='shadow-md bg-white rounded-3xl'>
            <div className='flex justify-between items-center bg-[#f9f9ff] p-6 rounded-t-3xl'>
                <h1 className="block text-xl font-semibold text-gray-500">Notifications</h1>
                <Link href={'#'} className='text-blue-700 underline'> View All</Link>
            </div>
            <div className='px-8'>
                <div className='flex items-center gap-5 border-b py-5'>
                    <span className="h-12 w-12 rounded-full">
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full"
                            src={profile}
                            style={{
                                width: "auto",
                                height: "auto",
                            }}
                            alt="User"
                        />
                    </span>
                    <div className="text-left w-full mr-5">
                        <p className="block text-sm font-medium">Aneesh thomas <span className='text-gray-500'>has updated </span>Freight charges</p>
                        <div className='flex justify-between items-center mt-2'>
                            <span className='bg-background p-2 rounded-md text-xs font-medium'>TR-22-00001</span>
                            <span className='text-xs text-grey-50'>3h ago</span>
                        </div>
                    </div>
                </div>


            </div>

            <div className='px-8'>
                <div className='flex items-center gap-5 border-b py-5'>
                    <span className="h-12 w-12 rounded-full">
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full"
                            src={profile}
                            style={{
                                width: "auto",
                                height: "auto",
                            }}
                            alt="User"
                        />
                    </span>
                    <div className="text-left w-full mr-5">
                        <p className="block text-sm font-medium">Aneesh thomas <span className='text-gray-500'>has updated </span>Freight charges</p>
                        <div className='flex justify-between items-center mt-2'>
                            <span className='bg-background p-2 rounded-md text-xs font-medium'>TR-22-00001</span>
                            <span className='text-xs text-grey-50'>3h ago</span>
                        </div>
                    </div>
                </div>


            </div>

            <div className='px-8'>
                <div className='flex items-center gap-5 py-5'>
                    <span className="h-12 w-12 rounded-full">
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full"
                            src={profile}
                            style={{
                                width: "auto",
                                height: "auto",
                            }}
                            alt="User"
                        />
                    </span>
                    <div className="text-left w-full mr-5">
                        <p className="block text-sm font-medium">Aneesh thomas <span className='text-gray-500'>has updated </span>Freight charges</p>
                        <div className='flex justify-between items-center mt-2'>
                            <span className='bg-background p-2 rounded-md text-xs font-medium'>TR-22-00001</span>
                            <span className='text-xs text-grey-50'>3h ago</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NotificationCard