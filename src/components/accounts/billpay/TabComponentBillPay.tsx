"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function TabComponentBillPay() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="px-4 relative">
      <div className="absolute left-0 right-0 px-4 top-[-130px] w-full">
        <div className="p-1 rounded text-12 grid grid-cols-3 gap-2 bg-[#c53a41] w-full">
          <span
            className={`text-center rounded ${
              activeTab === 0 ? "bg-white text-[#2F5E80]" : "text-white"
            } rounded-l`}
            onClick={() => handleTabClick(0)}
          >
            Scheduled
          </span>
          <span
            className={`text-center rounded ${
              activeTab === 1 ? "bg-white text-[#2F5E80]" : "text-white"
            } `}
            onClick={() => handleTabClick(1)}
          >
            History
          </span>
          <span
            className={`text-center rounded ${
              activeTab === 2 ? "bg-white text-primary" : "text-white"
            } rounded-r`}
            onClick={() => handleTabClick(2)}
          >
            Payees
          </span>
        </div>
      </div>
      <div className="mt-4">
        {activeTab === 0 && (
          <div className="mt-20 flex flex-col items-center justify-center gap-4 w-10/12 mx-auto">
            <Image
              src="https://i.imgur.com/hYPGQkh.png"
              width={100}
              height={100}
              alt="tab_img"
            />
            <p className="font-bold text-lg">No Payments Scheduled</p>
            <p className="text-14 text-center text-gray-700">
              Scheduled payments will display here once added
            </p>
            <button className="border border-[#2F5E80] text-[#2F5E80] rounded py-1 px-2">
              Schedule Payment
            </button>
          </div>
        )}
        {activeTab === 1 && (
          <div className="mt-20 flex flex-col items-center justify-center gap-4 w-10/12 mx-auto">
            <Image
              src="https://i.imgur.com/hYPGQkh.png"
              width={100}
              height={100}
              alt="tab_img"
            />
            <p className="font-bold text-lg">No Payment History</p>
            <p className="text-14 text-center text-gray-700">
              You do not have any recent payment history to be displayed. After
              a payment processes, it will appear here.
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div className="mt-20 flex flex-col items-center justify-center gap-4 w-10/12 mx-auto">
            <Image
              src="https://i.imgur.com/wQKauRj.png"
              width={100}
              height={100}
              alt="tab_img"
            />
            <p className="font-bold text-lg">No Payees Found</p>
            <p className="text-14 text-center text-gray-700">
              Payees will display here once added.
            </p>
            <button className="border border-[#2F5E80] text-[#2F5E80] rounded py-1 px-2">
              Add Payee
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
