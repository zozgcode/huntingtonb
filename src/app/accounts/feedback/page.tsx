import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function FeedbackPage() {
  return (
    <div className="relative">
      <div className="w-full text-white uppercase flex justify-center items-center p-4 bg-[#2d1a47] relative">
        <Link href="/accounts" className="absolute left-[20px]">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <span className="text-white text-lg font-semibold">Feedback</span>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-4 w-10/12 mx-auto">
        <p>
          <span className="font-bold">
            Thank you for giving us feedback on our app!
          </span>
          We are always open to hearing suggestions for how we can improve our
          service to you.
          <span className="mt-2 block">
            To leave feedback, click the button below!
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center fixed bottom-[100px] w-full">
        <button className="bg-[#2f5e80] w-9/12 mx-auto rounded-lg py-1 text-white">Verify</button>
      </div>
    </div>
  );
}
