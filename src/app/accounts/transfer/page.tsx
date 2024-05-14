import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function TransferPage() {
  return (
    <div className="">
      <div className="w-full text-white uppercase flex justify-center items-center p-4 bg-[#394048] relative">
        <Link href="/accounts" className="absolute left-[20px]">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <span className="text-white text-lg font-semibold">Transfer Fund</span>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-4 w-10/12 mx-auto">
        <FaMoneyBillTransfer className="text-8xl" />
        <p className="font-bold text-lg">Transfer Fund Not Allowed</p>
        <p className="text-14 text-center text-gray-700">
          You are ineligible to make a fund transfer at this time. Please
          contact support Services if you
          have questions.
        </p>
      </div>
      <div className="flex items-center justify-center fixed bottom-[100px] w-full">
        <button className="bg-[#4D841B] w-9/12 mx-auto rounded-lg py-1 text-white">
          Verify
        </button>
      </div>
    </div>
  );
}
