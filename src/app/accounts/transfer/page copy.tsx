import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import TransferForm from "@/components/transferForm/TransferForm";

export default function TransferPage() {
  return (
    <div className="">
      <div className="w-full text-white uppercase flex justify-center items-center p-4 bg-[#394048]">
        <Link href="/accounts" className="absolute left-[20px]">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <span className="text-white text-lg font-semibold">Transfer Fund</span>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-4 w-10/12 mx-auto">
        <TransferForm />
      </div>
    </div>
  );
}
