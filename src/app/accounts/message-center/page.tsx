import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function MessagePage() {
  return (
    <div className="">
      <div className="w-full text-white uppercase flex justify-between items-center p-4 bg-[#2d1a47] relative">
        <Link href="/accounts" className="relative left-[20px]">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <span className="text-white text-lg font-semibold">Message Center</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </div>
      <div className="mt-5">
        <div className="w-full mt-5 bg-white h-screen">
          <div className="p-4 bg-white border-b border-gray-400 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>
                <span className="text-gray-500 text-14">Debit Card</span>
                <p className="text-gray-700 text-14 leading-5">
                  Dear Member, <br /> Thank you for your message. We see sev...
                </p>
              </div>
            </div>
            <div className="flex flex-col text-14 leading-5">
              <span>5/19/22</span>
              <span>10:17 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
