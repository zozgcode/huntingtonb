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
        <span className="text-white text-lg font-semibold">
          App Information
        </span>
      </div>
      <div className="">
        <div className="w-full bg-white h-screen">
          <div className="flex flex-col text-xl font-semibold gap-2 text-[#2f5e80] p-4 px-5 border-b border-gray-400">
            <span className="text-base">App Version</span>
            <span>5.1.0</span>
          </div>
          <div className="flex flex-col text-xl font-semibold gap-2 text-[#2f5e80] p-4 px-5 border-b border-gray-400">
            <span className="text-base">App Platform</span>
            <span>Web</span>
          </div>
          <div className="bg-white px-4 py-2 text-[#2f5e80]">
            <span className="text-12 text-primary font-bold mb-2 block">
              What&apos;s New
            </span>
            <ul className="list-disc ml-4">
              <li className="text-12 mb-2">
                <span className="font-bold">
                  One Time Passcode (OTP) Auto Entry
                </span>
                <br /> OTPs will appear in your keyboard for easy entry after
                you receive your SMS messages.
              </li>
              <li className="text-12 mb-2">
                <span className="font-bold">View Entire Account Number</span>
                <br /> View your entire account number by pressing the info icon
                on the account&apos;s transaction history screen.
              </li>
              <li className="text-12 mb-2">
                <span className="font-bold">New Setting Menu Options</span>
                <br /> Enable persistent banners to force banner-style messages
                to remain open until you close them.
              </li>
              <li className="text-12 mb-2">
                <span className="font-bold">Enhancements</span>
                <br /> Minor bugs fixes and Enhancements, with focus on
                performance and user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
