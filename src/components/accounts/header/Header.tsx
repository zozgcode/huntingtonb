import Image from "next/image";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-[#2d1a47] py-7 text-white flex items-center justify-center w-full p-5">
      <div className="flex items-end justify-end w-[55%]"><h2 className="text-[24px]">Home</h2></div>
      <div className="flex items-end justify-end w-[45%]"><FaRegCircleUser className="text-[32px]" /></div>
      {/* <Image src="" width={50} height={50} alt="avatar" /> */}
    </header>
  );
}
