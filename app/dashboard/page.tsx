import SmallCard from '@/components/ui/smallcard';
import Image from 'next/image';
import React from 'react';
import dashboard from '../../images/dashboard.svg';
import profile from '../../images/profile.jpg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
import NotificationCard from '@/components/ui/notification-card';
import { ChartComponent } from '@/components/ui/chart-card';


const Dashboard = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <span className='font-medium flex items-center gap-4 text-lg text-gray-500'><Image src={dashboard} width={26} height={26} alt='dashboard' /> DASHBOARD</span>
        <DropdownMenu>
          <DropdownMenuTrigger className='text-sm font-medium text-gray-500 bg-white px-5 py-2 rounded-lg flex gap-5'>Filter <ChevronDown size={20} /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Monthly</DropdownMenuItem>
            <DropdownMenuItem>Yearly</DropdownMenuItem>
            <DropdownMenuItem>Daily</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-10">
        <div className='shadow-md bg-white rounded-3xl p-10'>
          <div className='flex gap-5'>
            <span className="h-12 w-12 rounded-full">
              <Image
                width={50}
                height={50}
                className="rounded-full"
                src={profile}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                alt="User"
              />
            </span>
            <span className="hidden text-left lg:block mr-5">
              <span className="block text-sm text-gray-500">Good Morning,</span>
              <h1 className="block text-xl font-semibold text-gray-500">
                Jane Doe
              </h1>
            </span>
          </div>
          <div className='mt-20'>
            <SmallCard />
          </div>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
          <div>
            <ChartComponent />
          </div>
          <div>03</div>
        </div>
        <NotificationCard />
      </div>
    </div>
  )
}

export default Dashboard