"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

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
         
        </div>
      )}
    </div>
  );
}
