"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DonaldLawrence from "./allUsersTxtData/DonaldLawrence";
import { RiLogoutCircleRLine } from "react-icons/ri";


export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const [hide, setHide] = useState(false);
  
  const toggle = () => {
    setHide(!hide)
  }

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setUser(JSON.parse(loggedInUserData));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to the login page
    router.push("/");
  };

  return (
    <div className="">
      {!user && (
        <div className="h-screen flex flex-col top-0 bg-white left-0 right-0 items-center fixed z-50 justify-center w-full text-2xl">
          <div className="loader"></div>
        </div>
      )}
      {user && (
        <div className="w-full">
          <div className="p-5 py-7 bg-[#ffffff]">
            <div className="flex justify-between">
              <div className="flex justify-between w-full">
                <p className="flex flex-col gap-1 text-black">
                  <div className="flex items-center gap-3">
                    <span className="text-[16px]">Welcome,</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-semibold">
                    {user.name}
                  </span>
                </p>
                <RiLogoutCircleRLine
                  className="text-[25px] text-black"
                  onClick={handleLogout}
                />
              </div>
            </div>
          </div>
          <div className="border p-5 px-2">
            {/* checking acct */}
            <div className="w-full bg-[#394048] rounded-lg h-full p-5">
              <div className="flex justify-between">
                <span className="block text-[#fff]/90 sm:text-[24px] text-[19px] font-semibold mb-1">
                  Checking Account
                </span>
                {/* <span className="block text-black font-semibold sm:text-[24px] text-[19px] mb-1">
                  {user.checkingAccountNo}
                </span> */}
              </div>
              <p className="flex justify-between mt-4 sm:text-[26px] text-[20px] items-center font-bold text-[#fff]/80">
                <span className="font-normal sm:text-[24px] text-[19px]">
                  Available Balance
                </span>
                <span>${user.checkingAmount}</span>
              </p>
            </div>

            {/* saving acct */}
            {user?.savingAmount && (
              <div className="w-full bg-[#394048] rounded-lg h-full p-5 mt-5">
              <div className="flex justify-between">
                <span className="block text-[#fff]/90 sm:text-[24px] text-[19px] font-semibold mb-1">
                  Saving Account
                </span>
                {/* <span className="block text-black font-semibold sm:text-[24px] text-[19px] mb-1">
                  {user.checkingAccountNo}
                </span> */}
              </div>
              <p className="flex justify-between mt-4 sm:text-[26px] text-[20px] items-center font-bold text-[#fff]/80">
                <span className="font-normal sm:text-[24px] text-[19px]">
                  Available Balance
                </span>
                <span>${user.savingAmount}</span>
              </p>
            </div>
            )}
          </div>
          {/* <TransactionHistory /> */}
          <div className="p-5 px-2">
            <div className="bg-[#fff]/90 flex items-center justify-between rounded p-3 py-2 sm:text-[24px] text-[19px] w-full">
              <span>Transactions</span>
              {/* <Link className="text-sky-500 underline" href="/accounts/transactions">
          See all
        </Link> */}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {user.id === 1 && <DonaldLawrence />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
