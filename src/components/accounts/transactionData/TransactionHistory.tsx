"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Testing from "../allUsersTxtData/Testing";
import { TestingTwoTxData, TestingTxData } from "./TrxData";
import { TbArrowBackUpDouble, TbArrowForwardUpDouble } from "react-icons/tb";

export default function TransactionHistory() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setUser(JSON.parse(loggedInUserData));
    }
  }, []);

  return (
    <div className="p-5 px-2">
      <p className="text-base">Transactions</p>
      {user && (
        <div className="mt-5">
          {user.username === "testing" && (
            <div>
              {TestingTxData.map((txt, i) => (
                <div
                  key={i}
                  className="border justify-between flex bg-white p-4 max-[470px]:px-2 w-full rounded-lg"
                >
                  <div className="flex gap-1">
                    <div className="border w-7 sm:w-8 h-7 sm:h-8 flex items-center text-lg sm:text-xl justify-center text-[#d71e28] rounded-full bg-[#d71e28]/10">
                      {txt.whatUsed === "Credit" && <TbArrowBackUpDouble />}
                      {txt.whatUsed === "Debit" && <TbArrowForwardUpDouble />}
                    </div>
                    <div>
                      <p className="trxName text-[15px] sm:text-base">
                        {txt.txName}
                      </p>
                      <p className="text-[13px] mt-1 text-gray-400">
                        {txt.date}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`text-right ${
                      txt.whatUsed === "Credit"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    <p className="font-semibold text-[15px] sm:text-base">
                      {txt.amount}
                    </p>
                    <p className="text-sm md:text-base">{txt.whatUsed}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {user.username === "testing2" && (
            <div>
              {TestingTwoTxData.map((txt, i) => (
                <div
                  key={i}
                  className="border justify-between flex bg-white p-4 max-[470px]:px-2 w-full rounded-lg"
                >
                  <div className="flex gap-1">
                    <div className="border w-7 sm:w-8 h-7 sm:h-8 flex items-center text-lg sm:text-xl justify-center text-[#d71e28] rounded-full bg-[#d71e28]/10">
                      {txt.whatUsed === "Credit" && <TbArrowBackUpDouble />}
                      {txt.whatUsed === "Debit" && <TbArrowForwardUpDouble />}
                    </div>
                    <div>
                      <p className="trxName text-[15px] sm:text-base">
                        {txt.txName}
                      </p>
                      <p className="text-[13px] mt-1 text-gray-400">
                        {txt.date}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`text-right ${
                      txt.whatUsed === "Credit"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    <p className="font-semibold text-[15px] sm:text-base">
                      {txt.amount}
                    </p>
                    <p className="text-sm md:text-base">{txt.whatUsed}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
