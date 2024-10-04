"use client";

import React from "react";
import Image from "next/image";
import shape from "../../images/shape1.svg";
import transfer from "../../images/transfer.svg";

const SmallCard = () => {
  return (
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
          <h1 className="text-blue-950 text-4xl">12</h1>
          <p className="text-gray-500 text-lg">
            $ <span className="font-bold ">3,5678</span>{" "}
          </p>
        </div>
        <div className="">
          <span className="text-gray-500 font-medium text-sm">
            CONTRACT STAGE
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
