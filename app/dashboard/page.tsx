'use client';

import SmallCard from "@/components/ui/smallcard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dashboard from "../../images/dashboard.svg";
import profile from "../../images/profile.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import NotificationCard from "@/components/ui/notification-card";
import { ChartComponent } from "@/components/ui/chart-card";
import TradeOverview from "@/components/ui/trade-overview";
import transfer from '../../images/transfer.svg';
import shape from '../../images/shape1.svg';
import axios from "axios";


const Dashboard = () => {
  const [customercount, setCustomercount] = useState();
  const [suppliercount, setSuppliercount] = useState();
  const [meetingcount, setMeetingcount] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
  
    try {
      const [customersResponse, suppliersResponse, meetingsResponse] = await Promise.all([
        axios.get('/api/customers'),
        axios.get('/api/supplier'),
        axios.get('/api/meeting'),
      ]);
  
      setCustomercount(customersResponse.data.count);
      setSuppliercount(suppliersResponse.data.count);
      setMeetingcount(meetingsResponse.data.count);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="font-medium flex items-center gap-4 text-lg text-gray-500">
          <Image src={dashboard} width={26} height={26} alt="dashboard" />{" "}
          DASHBOARD
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-medium text-gray-500 bg-white px-5 py-2 rounded-lg flex gap-5">
            Filter <ChevronDown size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Monthly</DropdownMenuItem>
            <DropdownMenuItem>Yearly</DropdownMenuItem>
            <DropdownMenuItem>Daily</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-wrap gap-4 mt-10">
        <div className="flex-none w-full xl:w-7/12">
          <div className="shadow-md bg-white rounded-3xl p-10 bg-gradient-to-t from-[#e2fef9] via-[#f2fffc] to-[#fff]">
            <div className="flex gap-5">
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
            <div className="flex gap-5 mt-16">
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
          <NotificationCard />
        </div>
        <div className="flex-auto w-64">
          <ChartComponent />
        </div>
        <div className="space-y-4">
          {/* customer */}
          <div className="shadow-md flex flex-col justify-between bg-white w-60 h-60 rounded-2xl">
            <div className="relative">
              <Image
                className="absolute top-8 left-5"
                src={transfer}
                alt={"shape"}
                width={50}
                height={50}
              />
              <Image
                src={shape}
                className="rounded-xl"
                alt={"shape"}
                width={120}
                height={120}
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-end">
                <h1 className="text-blue-950 text-4xl">{customercount}</h1>
                <p className="text-gray-500 text-lg">
                  $ <span className="font-bold ">3,5678</span>{" "}
                </p>
              </div>
              <div className="">
                <span className="text-gray-500 font-medium text-sm">
                  CUSTOMERS
                </span>
              </div>
            </div>
          </div>

          {/* supplier */}
          <div className="shadow-md flex flex-col justify-between bg-white w-60 h-60 rounded-2xl">
            <div className="relative">
              <Image
                className="absolute top-8 left-5"
                src={transfer}
                alt={"shape"}
                width={50}
                height={50}
              />
              <Image
                src={shape}
                className="rounded-xl"
                alt={"shape"}
                width={120}
                height={120}
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-end">
                <h1 className="text-blue-950 text-4xl">{suppliercount}</h1>
                <p className="text-gray-500 text-lg">
                  $ <span className="font-bold ">3,5678</span>{" "}
                </p>
              </div>
              <div className="">
                <span className="text-gray-500 font-medium text-sm">
                  SUPPLIERS
                </span>
              </div>
            </div>
          </div>

          {/* meetings */}
          <div className="shadow-md flex flex-col justify-between bg-white w-60 h-60 rounded-2xl">
            <div className="relative">
              <Image
                className="absolute top-8 left-5"
                src={transfer}
                alt={"shape"}
                width={50}
                height={50}
              />
              <Image
                src={shape}
                className="rounded-xl"
                alt={"shape"}
                width={120}
                height={120}
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-end">
                <h1 className="text-blue-950 text-4xl">{meetingcount}</h1>
                <p className="text-gray-500 text-lg">
                  $ <span className="font-bold ">3,5678</span>{" "}
                </p>
              </div>
              <div className="">
                <span className="text-gray-500 font-medium text-sm">
                  MEETINGS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TradeOverview />
    </div>
  );
};

export default Dashboard;
