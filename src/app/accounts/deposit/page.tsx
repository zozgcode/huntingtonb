import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function DepositPage() {
  return (
    <div className="">
      <div className="w-full text-white uppercase flex justify-center items-center p-4 bg-[#394048] relative">
        <Link href="/accounts" className="absolute left-[20px]">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <span className="text-white text-lg font-semibold">New Deposit</span>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-4 w-10/12 mx-auto">
        <Image
          src="https://i.imgur.com/158iErX.png"
          width={100}
          height={100}
          alt="tab_img"
        />
        <p className="font-bold text-lg">Deposit Not Allowed</p>
        <p className="text-14 text-center text-gray-700">
          You are ineligible to make a Mobile Check Deposit at this time. Please
          contact Member Services if you
          have questions
        </p>
      </div>
    </div>
  );
}
