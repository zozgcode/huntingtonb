import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function MorePage() {
  return (
    <div className="">
      <div className="w-full text-white uppercase flex justify-center items-center p-4 bg-[#2d1a47] relative">
        <Link href="/accounts" className="absolute left-[20px]">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <span className="text-white text-lg font-semibold">Settings</span>
      </div>
      <div className="mt-5">
        <p className="px-5 text-base font-semibold">App Settings</p>

        <div className="w-full mt-5 bg-white h-screen">
          <div className="flex justify-between text-xl font-semibold gap-2 text-[#2f5e80] p-4 px-5 border-b border-gray-400">
            <span className="text-base">Biometrics</span>
            <span>5.1.0</span>
          </div>
          <div className="flex justify-between text-xl font-semibold gap-2 text-[#2f5e80] p-4 px-5 border-b border-gray-400">
            <span className="text-base">Persistent Banners</span>
            <span>5.1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
