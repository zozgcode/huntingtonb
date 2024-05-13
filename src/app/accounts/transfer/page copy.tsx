"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";

interface UserData {
  id: number;
  name: string;
  profileImg: string;
  cardName: string;
  username: string;
  password: string;
  checkingAmount: string;
  checkingAccountNo: string;
  createdOn: string;
}

export default function TransferPage() {
  const [routingNumber, setRoutingNumber] = useState<number | "">("");
  const [amount, setAmount] = useState<number | "">("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Retrieve user data from localStorage
    const userData: UserData | null = JSON.parse(localStorage.getItem("loggedInUser") || "");
    if (!userData) {
      // Handle case when user data is not available
      return;
    }
    
    // Parse checking account balance and deduct the transferred amount
    let checkingAmount: number = parseFloat(userData.checkingAmount.replace(",", ""));
    const transferAmount: number = parseFloat(amount as string);
    if (isNaN(checkingAmount) || isNaN(transferAmount)) {
      // Handle case when balance or transfer amount is not a number
      return;
    }
    
    if (checkingAmount < transferAmount) {
      // Handle case when balance is insufficient for the transfer
      return;
    }
    
    checkingAmount -= transferAmount;
    
    // Update user data with the new balance
    userData.checkingAmount = checkingAmount.toLocaleString("en-US", { minimumFractionDigits: 2 });
    
    // Save updated user data back to localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    
    // Optionally, you can redirect the user to a confirmation page or perform other actions
    // after the transfer is completed successfully.
  };

  return (
    <div className="">
      <div className="w-full text-white uppercase flex justify-center items-center p-4 bg-[#d71e28] relative">
        <Link href="/accounts" className="absolute left-[20px]">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <span className="text-white text-lg font-semibold">Transfer Fund</span>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 w-10/12 mx-auto">
      <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <input
              type="number"
              placeholder="Routing Number"
              value={routingNumber}
              onChange={(e) => setRoutingNumber(parseInt(e.target.value))}
              className="p-5 bg-transparent pl-0 pb-5 pt-11 border-b border-b-gray-300 outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="p-5 bg-transparent pl-0 pb-5 pt-11 border-b border-b-gray-300 outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mt-12">
            <button
              type="submit"
              className="p-4 bg-[#d71e28] mx-auto rounded-full w-[200px] text-white"
            >
              Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
